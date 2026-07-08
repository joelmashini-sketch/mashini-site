import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { nom, email, extra, telephone, sujet, message, profil } = body;

  if (!nom || !email || !message) {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Contact Mashini <onboarding@resend.dev>",
    to: "joel.mashini@mashiniassocies.com",
    replyTo: email,
    subject: sujet ? `[Contact] ${sujet}` : `[Contact] Nouveau message de ${nom}`,
    html: `
      <p><strong>Profil :</strong> ${profil}</p>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Email :</strong> ${email}</p>
      ${telephone ? `<p><strong>Téléphone :</strong> ${telephone}</p>` : ""}
      ${extra ? `<p><strong>Info complémentaire :</strong> ${extra}</p>` : ""}
      ${sujet ? `<p><strong>Sujet :</strong> ${sujet}</p>` : ""}
      <hr />
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  if (error) {
    console.error("[Resend error]", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
