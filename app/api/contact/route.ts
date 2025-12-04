import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Esta función maneja la petición POST desde el formulario
export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { nombre, email, telefono, area, asunto, mensaje, preferencia } = data

    // 1. Configurar el transportador (Tu cuenta de correo que enviará los emails)
    // NOTA: Para Gmail, necesitas generar una "Contraseña de Aplicación" (App Password)
    // No uses tu contraseña normal. Ver instrucciones abajo.
    const transporter = nodemailer.createTransport({
      service: "gmail", // O 'outlook', 'hotmail'
      auth: {
        user: process.env.EMAIL_USER, // Tu correo (ej: micorreo@gmail.com)
        pass: process.env.EMAIL_PASS, // Tu contraseña de aplicación
      },
    })

    // 2. Configurar el contenido del correo que TE llegará a ti
    const mailOptions = {
      from: `"Web Bufete Jurídico" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // El correo donde quieres RECIBIR las consultas
      replyTo: email, // Para que al dar "Responder" le contestes al cliente
      subject: `Nueva Consulta Legal: ${asunto} - ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #1a365d;">Nueva Consulta recibida desde la Web</h2>
          <hr>
          <p><strong>Cliente:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Área Legal:</strong> ${area}</p>
          <p><strong>Preferencia de contacto:</strong> ${preferencia}</p>
          <br>
          <h3>Mensaje:</h3>
          <p style="background-color: #f4f4f4; padding: 15px; border-radius: 5px;">${mensaje}</p>
        </div>
      `,
    }

    // 3. Enviar el correo
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Correo enviado exitosamente" }, { status: 200 })
  } catch (error) {
    console.error("Error enviando correo:", error)
    return NextResponse.json({ error: "Error al enviar el correo" }, { status: 500 })
  }
}