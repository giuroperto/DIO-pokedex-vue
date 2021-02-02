<template functional>
	<div class="divider bg--red-01">
		<div class="arc arc--top bg--red-04" />
		<div class="arc arc--bottom bg--red-04" />
	</div>

</template>

<style lang="scss" scoped>
  // se colocar template functional aqui em cima o componente se torna funcional, nao vai ter a instancia do vue atrelada a ele -> ele vai ser puramente renderizado -> como ele nao tem nenhuma funcionalidade a ser aplicada dentro dele nao precisa gerar uma instancia do vue pra ele -> ganha performance

  .divider {
    position: absolute;
    height: calc(100% - 40px);
    width: 40px;
    left: calc(50% - 20px);
    top: 40px;
    // dois box shadows no mesmo elemento para sombreamento
    box-shadow: inset 10px 0 0 0 color('red-00'), inset -10px 0 0 0 color('red-03');

    .arc {
      position: absolute;
      height: 4px;
      width: 100%;

      &--top {
        top: 20px;
      }

      &--bottom {
        bottom: 20px;
      }

      @media (max-width: 767px) {
        height: 100%;
        width: 4px;

        &--top, &--bottom {
          top: 0;
        }

        &--top {
          left: 20px;
        }

        &--bottom {
          right: 20px;
        }
      }

    }

    @media (max-width: 767px) {
      width: 100%;
      top: 50%;
      height: 40px;
      left: 0;
      box-shadow: inset 0 10px 0 0 color('red-00'), inset 0 -10px 0 0 color('red-03');
    }
  }

</style>
