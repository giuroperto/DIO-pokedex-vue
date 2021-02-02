<template>
  <div class="pokedex">
    <!-- classes serão injetadas no componente -->
    <TopPanel />
    <LeftPanel class="pokedex--left" />
    <Divider />
    <RightPanel class="pokedex--right" />
  </div>
</template>

<script>
  import TopPanel from './TopPanel/TopPanel.vue';
  import LeftPanel from './LeftPanel/LeftPanel.vue';
  import RightPanel from './RightPanel/RightPanel.vue';
  import Divider from './Divider/Divider.vue';

export default {
  // definir nome como boas práticas -> nome do arquivo
  name: 'Pokedex',
  components: {
    TopPanel,
    LeftPanel,
    RightPanel,
    Divider,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .pokedex {
    position: relative;
    // teremos componentes dentro que serao absolutos e portanto a pokedex tem que ser relativa
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 960px;
    height: 100%;
    @media (min-width: $viewport-medium) {
      max-height: 700px;
      flex-direction: row;
    }
    &--left,
    &--right {
      position: relative;
      display: flex;
      height: 50%;
      // posicionando elemento em 3d -> perspectiva -> o quão longe está do usuário -> valor pequeno mais intensivo, mais perto do usuario, impacto bem maior -> valor maior, mais longe, e dependendo do que estiver fazendo dá efeito mais suave
      perspective: 1700px;
      transform-style: preserve-3d;
      @media (min-width: $viewport-medium) {
        height: 100%;
      }
    }
  }
</style>

