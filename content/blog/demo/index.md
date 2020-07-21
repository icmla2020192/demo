---
title: Audio examples
date: "2020-07-17T22:20:00.284Z"
tags: [demo]
description: "Audio examples accompanying paper ID 192 for the 19th International Conference of Machine Learning and Applications."
---
Audio examples accompanying paper ID 192 for 19th International Conference of Machine Learning and Applications.

# JPSV-120E Dataset

Each presented song follows song and singer IDs in Tables I and II in the paper. All examples are 16-bit 22050 Hz WAV files.

<figure>
<figcaption><b>Ground truth (female)</b></figcaption>
	<audio controls
		src="./audio/A_JP/A_SOURCE_female_JP.wav">
	</audio>
</figure>

<figure>
<figcaption><b>Reconstruction (female)</b></figcaption>
<figcaption>Generator trained using space <b>Zc = 4</b></figcaption>
	<audio controls
		src="./audio/A_JP/A_Z4_RECON_female_JP.wav">
	</audio>
</figure>

<figure>
<figcaption><b>Voice Conversion (female &rarr; female)</b></figcaption>
<figcaption>4 examples generated with a trained model using space <b>Zc = 4</b></figcaption>
	<audio controls
		src="./audio/A_JP/A4_Z4_female_female_JP.wav">
	</audio>
	<audio controls
		src="./audio/A_JP/A3_Z4_female_female_JP.wav">
	</audio>
	<audio controls
		src="./audio/A_JP/A2_Z4_female_female_JP.wav">
	</audio>
	<audio controls
		src="./audio/A_JP/A1_Z4_female_female_JP.wav">
	</audio>
	<figcaption>Above examples show varied timbres and successful conversions to different singers</figcaption>
</figure>

<figure>
<figcaption><b>Voice Conversion (female &rarr; male)</b></figcaption>
<figcaption>4 examples generated with a trained model using space <b>Zc = 4</b></figcaption>
	<audio controls
		src="./audio/A_JP/A4_Z4_female_male_JP.wav">
	</audio>
	<audio controls
		src="./audio/A_JP/A3_Z4_female_male_JP.wav">
	</audio>
	<audio controls
		src="./audio/A_JP/A2_Z4_female_male_JP.wav">
	</audio>
	<audio controls
		src="./audio/A_JP/A1_Z4_female_male_JP.wav">
	</audio>
	<figcaption>Above examples show varied timbres and successful conversions to different singers</figcaption>
</figure>

<figure>
<figcaption><b>Voice Conversion (female &rarr; male)</b></figcaption>
<figcaption>Generator trained using space <b>Zc = 100</b></figcaption>
	<audio controls
		src="./audio/A_JP/A1_Z100_female_male_JP.wav">
	</audio>
<figcaption>Example sounds almost the same as the ground truth with <b>no voice conversion</b></figcaption>
</figure>
