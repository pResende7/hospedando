# Animações ao Scroll - Smile Chic Clinic

Este projeto implementa um sistema completo de animações ao scroll usando a Intersection Observer API. As animações são suaves, performáticas e acessíveis.

## Componentes de Animação

### 1. `useScrollAnimation` Hook

Hook personalizado que detecta quando elementos entram na viewport:

```tsx
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const { elementRef, isVisible } = useScrollAnimation({
  threshold: 0.1,        // Porcentagem do elemento visível para trigger
  rootMargin: '0px',     // Margem adicional
  triggerOnce: true      // Se deve animar apenas uma vez
});
```

### 2. `AnimatedSection` Component

Componente para animar seções individuais:

```tsx
import { AnimatedSection } from '@/components/ui/animated-section';

<AnimatedSection 
  animation="slideUp"    // Tipo de animação
  delay={200}           // Delay em ms
  duration={600}        // Duração da animação
  threshold={0.1}       // Threshold do Intersection Observer
  triggerOnce={true}    // Animar apenas uma vez
>
  <div>Seu conteúdo aqui</div>
</AnimatedSection>
```

### 3. `AnimatedList` Component

Componente para animar listas com delay sequencial:

```tsx
import { AnimatedList } from '@/components/ui/animated-list';

<AnimatedList 
  animation="slideUp"     // Tipo de animação
  staggerDelay={150}      // Delay entre elementos
  duration={600}          // Duração da animação
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</AnimatedList>
```

## Tipos de Animação Disponíveis

### Para AnimatedSection:
- `fadeIn` - Fade in simples
- `slideUp` - Desliza de baixo para cima
- `slideLeft` - Desliza da direita para esquerda
- `slideRight` - Desliza da esquerda para direita
- `scaleIn` - Escala de 95% para 100%
- `rotateIn` - Rotação com escala

### Para AnimatedList:
- `fadeIn` - Fade in simples
- `slideUp` - Desliza de baixo para cima
- `slideLeft` - Desliza da direita para esquerda
- `slideRight` - Desliza da esquerda para direita
- `scaleIn` - Escala de 95% para 100%

## Exemplos de Uso

### Animação de Header
```tsx
<AnimatedSection animation="slideUp" delay={200}>
  <div className="text-center space-y-4 mb-16">
    <h2 className="text-4xl font-bold">Título</h2>
    <p>Descrição</p>
  </div>
</AnimatedSection>
```

### Animação de Cards em Grid
```tsx
<AnimatedList animation="scaleIn" staggerDelay={200}>
  <div className="grid lg:grid-cols-3 gap-8">
    {items.map((item, index) => (
      <Card key={index}>
        <CardContent>{item.content}</CardContent>
      </Card>
    ))}
  </div>
</AnimatedList>
```

### Animação de Conteúdo Lateral
```tsx
<div className="grid lg:grid-cols-2 gap-16">
  <AnimatedSection animation="slideRight" delay={300}>
    <div>Conteúdo da esquerda</div>
  </AnimatedSection>
  
  <AnimatedSection animation="slideLeft" delay={400}>
    <div>Conteúdo da direita</div>
  </AnimatedSection>
</div>
```

## Configurações Avançadas

### Threshold
Controla quando a animação é disparada:
- `0.1` - Quando 10% do elemento está visível
- `0.5` - Quando 50% do elemento está visível
- `1.0` - Quando 100% do elemento está visível

### RootMargin
Adiciona margem ao viewport:
- `'0px'` - Sem margem
- `'50px'` - 50px de margem
- `'0px 0px -100px 0px'` - Margem negativa (anima antes de entrar na tela)

### TriggerOnce
- `true` - Anima apenas uma vez (padrão)
- `false` - Anima sempre que entra/sai da viewport

## Performance

- Usa Intersection Observer API nativa
- Animações CSS otimizadas
- Lazy loading automático
- Não bloqueia o thread principal
- Suporte a `prefers-reduced-motion`

## Acessibilidade

- Respeita `prefers-reduced-motion`
- Animações não interferem na navegação por teclado
- Mantém foco visual adequado
- Compatível com leitores de tela

## Customização

Para adicionar novos tipos de animação, edite os objetos `animationClasses` nos componentes:

```tsx
const animationClasses = {
  // Adicione suas animações aqui
  customAnimation: {
    initial: 'opacity-0 translate-y-12',
    animate: 'opacity-100 translate-y-0'
  }
};
```