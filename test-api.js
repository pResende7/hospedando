// Script para testar a API de email
// Execute com: node test-api.js

const testEmailData = {
  name: "João Silva",
  email: "joao@teste.com",
  phone: "(11) 99999-9999",
  message: "Gostaria de agendar uma consulta para tratamento de clareamento dental."
};

async function testAPI() {
  console.log('🧪 Testando API de Email...\n');
  
  // URLs de teste (substitua pela sua URL real)
  const urls = [
    'http://localhost:3000/api/send-email', // Local
    'https://hospedando-1src450hq-pedroresendes-projects.vercel.app/api/send-email', // Vercel
    'https://seu-site.netlify.app/.netlify/functions/send-email' // Netlify
  ];

  for (const url of urls) {
    console.log(`📡 Testando: ${url}`);
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testEmailData),
      });

      const result = await response.json();
      
      if (response.ok) {
        console.log('✅ Sucesso:', result.message);
      } else {
        console.log('❌ Erro:', result.message || result.error);
      }
    } catch (error) {
      console.log('❌ Erro de conexão:', error.message);
    }
    
    console.log('---\n');
  }
}

// Função para testar com dados personalizados
async function testWithCustomData(data) {
  console.log('📧 Enviando dados personalizados...\n');
  
  const url = 'http://localhost:3000/api/send-email'; // Ajuste conforme necessário
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Email enviado com sucesso!');
      console.log('📋 Resposta:', result);
    } else {
      console.log('❌ Erro ao enviar email:', result.message || result.error);
    }
  } catch (error) {
    console.log('❌ Erro de conexão:', error.message);
  }
}

// Executar teste padrão
testAPI();

// Para testar com dados personalizados, descomente:
/*
testWithCustomData({
  name: "Maria Santos",
  email: "maria@exemplo.com",
  phone: "(11) 88888-8888",
  message: "Preciso de informações sobre ortodontia."
});
*/ 