<template>
	<div>
		<h1 class="relative z-10 -mt-10 text-center font-light md:-mt-20">
			Association de production
			<span class="font-accent">audiovisuelle</span>. Traversons les univers du
			digital.
		</h1>
		<div
			class="absolute inset-x-8 bottom-6 z-10 flex flex-col justify-between gap-4 text-3xl font-semibold text-accent md:inset-x-12 md:bottom-4 md:flex-row md:items-center"
		>
			<NuxtLink :to="'projets/' + videos[videoToShow].redirectToTitle">
				{{ videos[videoToShow].title }}
			</NuxtLink>
			<div class="flex justify-between gap-4">
				<div
					v-for="(video, index) in videos"
					:key="index"
					@click="playVideo(index)"
					class="h-16 w-1 rounded md:h-1 md:w-28"
					:class="index === videoToShow ? 'bg-accent' : 'bg-accent/40'"
				></div>
			</div>
		</div>
		<video
			v-for="(video, index) in videos"
			:key="index"
			muted
			class="absolute inset-0 size-full object-cover"
			:class="index !== videoToShow && 'hidden'"
			:id="'video' + index"
		>
			<source :src="'/videos/' + video.src + '.webm'" type="video/webm" />
		</video>
	</div>
</template>

<script setup>
import videos from "~/assets/videos.json";

const videoToShow = ref(0);

// Fonction pour gérer la fin d'une vidéo
const handleVideoEnd = () => {
	cleanupCurrentVideo();
	videoToShow.value = (videoToShow.value + 1) % videos.length;
	setupCurrentVideo();
};

// Nettoie les écouteurs d'événements de la vidéo précédente
const cleanupCurrentVideo = () => {
	const currentVideo = document.getElementById("video" + videoToShow.value);
	if (currentVideo) {
		currentVideo.removeEventListener("ended", handleVideoEnd);
		currentVideo.pause();
	}
};

// Configure et démarre la vidéo actuelle
const setupCurrentVideo = () => {
	const video = document.getElementById("video" + videoToShow.value);
	if (video) {
		video.currentTime = 0; // Remet la vidéo au début
		video.play();
		video.addEventListener("ended", handleVideoEnd);
	}
};

// Fonction pour changer manuellement de vidéo
const playVideo = (index) => {
	if (index === videoToShow.value) return; // Déjà sur cette vidéo

	cleanupCurrentVideo();
	videoToShow.value = index;
	setupCurrentVideo();
};

onMounted(() => {
	setupCurrentVideo();
});

onBeforeUnmount(() => {
	cleanupCurrentVideo(); // Nettoyage lors de la destruction du composant
});
</script>
