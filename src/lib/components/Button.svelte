<script>
  import anime from "animejs"
  import {onMount} from "svelte"
  export let link, text

  onMount(()=> {
    anime({
      targets: '.button',
      opacity: [0,1],
      duration: 10000
    })
  })
</script>

<div class="button">
    <a
      class="link:normal"
      sveltekit:prefetch
      href="/{link}">
      {text}
    </a>
</div>

<style lang='scss'>
  .button {
    display: flex;
    .link\:normal {
      font-weight: bold;
      border-bottom: 1px solid rgba(0,0,0,.2);
      text-decoration: none;
      color: #ff3e00;
      display: inline-flex;
      align-items: center;
      position: relative;
      &:after {
        content: "";
        display: inline-block;
        width: 4px;
        height: 4px;
        margin-left: 4px;
        border-top: 2px solid #ff3e00;
        border-right: 2px solid #ff3e00;
        transform: rotate(45deg);
      }
    }
  }
</style>