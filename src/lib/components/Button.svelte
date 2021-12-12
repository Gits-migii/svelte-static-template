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
  <a href="/{link}">
    <a sveltekit:prefetch href="/{link}">{text}</a>
  </a>
</div>