<script lang="ts">
	import Thumbnail from '$lib/components/Thumbnail.svelte';
	import tunes from '$lib/images/tunes.jpg?w=400&enhanced';
	import faces from '$lib/images/jamie.png?w=400&enhanced';
	import photos from '$lib/images/photos.jpg?w=400&enhanced';
	import work from '$lib/images/work.png?w=400&enhanced';
	import contact from '$lib/images/contact.jpg?w=400&enhanced';
</script>

<svelte:head>
	<title>Nick Vincent</title>
	<meta
		name="description"
		content="Known to push pixels, strum tunes, make faces, snap photos, & reply promptly."
	/>
</svelte:head>

<header class="visually-hidden">
  <h1>Nick Vincent</h1>
</header>

<div class="left">
	<div class="image">
		<enhanced:img class="home" alt="Nick with guitar." src="$lib/images/home-2.jpg?w=1200" />
	</div>
</div>

<div class="right">
  <main>
    <p><strong>Nick</strong> is known to:</p>
    <ul class="grid-list">
      <li>
        <Thumbnail
          url="/tunes/"
          src={tunes}
          alt="Acoustic guitar"
          text="strum tunes"
          imgClass="tunes"
			  ></Thumbnail>
      </li>
      <li>
        <Thumbnail
          url="/faces/"
          src={faces}
          alt="Face illustration"
          text="make faces"
          imgClass="faces"
			  ></Thumbnail>
      </li>
      <li>
        <Thumbnail
          url="/photos/"
          src={photos}
          alt="Staircase photo"
          text="snap photos"
          imgClass="photos"
			  ></Thumbnail>
      </li>
      <li>
        <Thumbnail
          url="/work/"
          src={work}
          alt="Code"
          text="push pixels"
          imgClass="work"
			  ></Thumbnail>
      </li>
      <li>
        <Thumbnail
          url="/contact/"
          src={contact}
          alt="Phone booth"
          text="reply promptly"
          imgClass="contact"
			  ></Thumbnail>
      </li>
    </ul>
  </main>
</div>

<footer>
	<p class="breadcrumbs">
		<a href="/">Home</a>
	</p>
</footer>
