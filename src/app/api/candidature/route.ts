import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const formData = await req.formData();

  const nom        = formData.get("nom")?.toString() ?? "";
  const email      = formData.get("email")?.toString() ?? "";
  const telephone  = formData.get("telephone")?.toString() ?? "";
  const poste      = formData.get("poste")?.toString() ?? "";
  const experience = formData.get("experience")?.toString() ?? "";
  const motivation = formData.get("motivation")?.toString() ?? "";
  const cvFile     = formData.get("cv");

  if (!nom || !email || !motivation) {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
  }

  // Prépare la pièce jointe si un CV est fourni
  type Attachment = { filename: string; content: Buffer };
  let attachments: Attachment[] = [];
  if (cvFile && cvFile instanceof File && cvFile.size > 0) {
    const arrayBuffer = await cvFile.arrayBuffer();
    attachments = [{ filename: cvFile.name, content: Buffer.from(arrayBuffer) }];
  }

  const { error } = await resend.emails.send({
    from: "Candidatures Mashini <onboarding@resend.dev>",
    to: "joel.mashini@mashiniassocies.com",
    replyTo: email,
    subject: poste
      ? `[Candidature] ${poste} — ${nom}`
      : `[Candidature spontanée] ${nom}`,
    attachments,
    html: `
      <h2>Nouvelle candidature</h2>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Email :</strong> ${email}</p>
      ${telephone  ? `<p><strong>Téléphone :</strong> ${telephone}</p>`    : ""}
      ${poste      ? `<p><strong>Poste visé :</strong> ${poste}</p>`       : "<p><strong>Type :</strong> Candidature spontanée</p>"}
      ${experience ? `<p><strong>Formation / expérience :</strong> ${experience}</p>` : ""}
      ${attachments.length ? `<p><strong>CV joint :</strong> ${attachments[0].filename}</p>` : "<p><em>Aucun CV joint.</em></p>"}
      <hr />
      <p><strong>Lettre de motivation :</strong></p>
      <p>${motivation.replace(/\n/g, "<br/>")}</p>
    `,
  });

  if (error) {
    console.error("[Resend candidature error]", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
