import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Validação dos campos
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ 
        message: 'Todos os campos são obrigatórios' 
      });
    }

    // Enviar email
    const { data, error } = await resend.emails.send({
      from: 'Smile Chic Clinic <noreply@smilechicclinic.com>',
      to: [req.body.to || 'pedroresendec_@hotmail.com'],
      subject: `Nova consulta solicitada - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h1 style="color: #333; text-align: center; margin-bottom: 30px;">Nova Consulta Solicitada</h1>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #007bff; margin-top: 0;">Informações do Cliente</h2>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Nome:</strong>
                <span style="color: #333; margin-left: 10px;">${name}</span>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Email:</strong>
                <span style="color: #333; margin-left: 10px;">${email}</span>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Telefone:</strong>
                <span style="color: #333; margin-left: 10px;">${phone}</span>
              </div>
            </div>
            
            <div style="background-color: #e8f4fd; padding: 20px; border-radius: 8px; border-left: 4px solid #007bff;">
              <h3 style="color: #007bff; margin-top: 0;">Mensagem do Cliente</h3>
              <p style="color: #333; line-height: 1.6; margin: 0;">${message}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px;">
                Este email foi enviado automaticamente pelo formulário de contato da Smile Chic Clinic.
              </p>
              <p style="color: #666; font-size: 12px;">
                Data: ${new Date().toLocaleString('pt-BR')}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Erro ao enviar email:', error);
      return res.status(500).json({ 
        message: 'Erro ao enviar email',
        error: error.message 
      });
    }

    return res.status(200).json({ 
      message: 'Email enviado com sucesso!',
      data 
    });

  } catch (error) {
    console.error('Erro na API:', error);
    return res.status(500).json({ 
      message: 'Erro interno do servidor',
      error: error.message 
    });
  }
} 