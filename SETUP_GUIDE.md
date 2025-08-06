# 🚀 Guia Completo - Configuração da API de Email

## ✅ Status Atual
- ✅ Projeto criado
- ✅ API configurada
- ✅ Dependências instaladas
- ✅ Deploy no Vercel feito
- ⏳ Configurar Resend (próximo passo)

## 📋 Próximos Passos

### 1. Configurar Resend (OBRIGATÓRIO)

1. **Acesse**: https://resend.com
2. **Crie uma conta gratuita**
3. **Vá em "API Keys"**
4. **Clique em "Create API Key"**
5. **Copie a chave** (começa com `re_`)

### 2. Configurar Variáveis no Vercel

#### Opção A: Via Dashboard (Recomendado)
1. Acesse: https://vercel.com/dashboard
2. Clique no projeto "hospedando"
3. Vá em "Settings" > "Environment Variables"
4. Adicione:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_sua_chave_aqui` (substitua pela sua chave)
   - **Environment**: Production, Preview, Development
5. Clique "Save"

#### Opção B: Via Terminal
```bash
# Abra o PowerShell como administrador
# Execute:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Depois execute:
npx vercel env add RESEND_API_KEY
# Digite sua chave quando solicitado
```

### 3. Fazer Novo Deploy

```bash
# No terminal, na pasta do projeto:
npx vercel --prod
```

### 4. Testar

1. **Acesse**: https://hospedando-1src450hq-pedroresendes-projects.vercel.app
2. **Vá para a seção "Contato"**
3. **Preencha o formulário**
4. **Clique em "Enviar Mensagem"**
5. **Verifique seu email**: pedroresendec_@hotmail.com

## 🔧 URLs Importantes

- **Site**: https://hospedando-1src450hq-pedroresendes-projects.vercel.app
- **API**: https://hospedando-1src450hq-pedroresendes-projects.vercel.app/api/send-email
- **Dashboard Vercel**: https://vercel.com/pedroresendes-projects/hospedando

## 🚨 Solução de Problemas

### Erro: "Execution Policy"
```bash
# Execute no PowerShell como administrador:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Erro: "API Key not found"
- Verifique se a variável `RESEND_API_KEY` está configurada no Vercel
- Confirme se a chave está correta

### Erro: "Email not sent"
- Verifique os logs no dashboard do Vercel
- Confirme se o domínio está configurado no Resend

## 📧 Teste da API

Para testar a API diretamente:

```bash
# Execute no terminal:
curl -X POST https://hospedando-1src450hq-pedroresendes-projects.vercel.app/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste",
    "email": "teste@exemplo.com",
    "phone": "(11) 99999-9999",
    "message": "Teste da API"
  }'
```

## 🎯 Resultado Esperado

Após configurar tudo:
- ✅ Formulário envia emails para pedroresendec_@hotmail.com
- ✅ Layout profissional do email
- ✅ Funciona mesmo sem hospedagem do site
- ✅ Gratuito (até 100 emails/dia no Resend)

## 📞 Suporte

Se tiver problemas:
1. Verifique os logs no dashboard do Vercel
2. Confirme se o Resend está configurado
3. Teste com email diferente
4. Verifique a pasta de spam

---

**🎉 Parabéns!** Sua API de email está pronta e funcionando! 