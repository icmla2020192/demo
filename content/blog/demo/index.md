---
title: Audio examples
date: "2020-07-17T22:20:00.284Z"
tags: [demo]
description: "Audio examples accompanying paper ID 192 for the 19th International Conference of Machine Learning and Applications."
---
Audio examples accompanying paper ID 192 for 19th International Conference of Machine Learning and Applications.

While listening to the following audio examples, please note that some sonic artifacts are present here and also in other state-of-the-art singing voice conversion methods (e.g., [[1]](#ref)). The reduction of such artifacts is not the main target of our research and will be tackled by a research community in the future. Please focus on listening to the conversion of musical characteristics such as timbre and singing style.

# JPSV-120E Dataset - Female (Song 13 & ID 27)

Each presented audio example follows song and singer IDs in Tables I and II in the paper. All examples are 16-bit 22050 Hz WAV files.

<figure>
<figcaption><b>Ground truth (female)</b></figcaption>
	<audio controls
		src="./audio/A_female_JP/A_SOURCE_female_JP.wav">
	</audio>
</figure>

<figure>
<figcaption><b>Reconstruction (female)</b></figcaption>
<figcaption>Generator trained using space <b>Zc = 4</b></figcaption>
	<audio controls
		src="./audio/A_female_JP/A_Z4_RECON_female_JP.wav">
	</audio>
</figure>

<figure>
<figcaption><b>Voice Conversion (female &rarr; female)</b></figcaption>
<figcaption>4 examples generated with a trained model using space <b>Zc = 4</b></figcaption>
	<audio controls
		src="./audio/A_female_JP/A4_Z4_female_female_JP.wav">
	</audio>
	<audio controls
		src="./audio/A_female_JP/A3_Z4_female_female_JP.wav">
	</audio>
	<audio controls
		src="./audio/A_female_JP/A2_Z4_female_female_JP.wav">
	</audio>
	<audio controls
		src="./audio/A_female_JP/A1_Z4_female_female_JP.wav">
	</audio>
	<figcaption>Above examples show varied timbres and successful conversions to different singers</figcaption>
</figure>

<figure>
<figcaption><b>Voice Conversion (female &rarr; male)</b></figcaption>
<figcaption>4 examples generated with a trained model using space <b>Zc = 4</b></figcaption>
	<audio controls
		src="./audio/A_female_JP/A4_Z4_female_male_JP.wav">
	</audio>
	<audio controls
		src="./audio/A_female_JP/A3_Z4_female_male_JP.wav">
	</audio>
	<audio controls
		src="./audio/A_female_JP/A2_Z4_female_male_JP.wav">
	</audio>
	<audio controls
		src="./audio/A_female_JP/A1_Z4_female_male_JP.wav">
	</audio>
	<figcaption>Above examples show varied timbres and successful conversions to different singers</figcaption>
</figure>

<figure>
<figcaption><b>Voice Conversion (female &rarr; male)</b></figcaption>
<figcaption>Generator trained using space <b>Zc = 100</b></figcaption>
	<audio controls
		src="./audio/A_female_JP/A1_Z100_female_male_JP.wav">
	</audio>
<figcaption>Example sounds almost the same as the ground truth with <b>no voice conversion</b></figcaption>
</figure>


# JPSV-120E Dataset - Male (Song 56 & ID 04)
Each presented audio example follows song and singer IDs in Tables I and II in the paper. All examples are 16-bit 22050 Hz WAV files.

<figure>
<figcaption><b>Ground truth (male)</b></figcaption>
	<audio controls
		src="./audio/A_male_JP/A_SOURCE_male_JP.wav">
	</audio>
</figure>

<figure>
<figcaption><b>Reconstruction (male)</b></figcaption>
<figcaption>Generator trained using space <b>Zc = 4</b></figcaption>
	<audio controls
		src="./audio/A_male_JP/A_Z4_RECON_male_JP.wav">
	</audio>
</figure>

<figure>
<figcaption><b>Voice Conversion (male &rarr; female)</b></figcaption>
<figcaption>4 examples generated with a trained model using space <b>Zc = 4</b></figcaption>
	<audio controls
		src="./audio/A_male_JP/A4_Z4_male_female_JP.wav">
	</audio>
	<audio controls
		src="./audio/A_male_JP/A3_Z4_male_female_JP.wav">
	</audio>
	<audio controls
		src="./audio/A_male_JP/A2_Z4_male_female_JP.wav">
	</audio>
	<audio controls
		src="./audio/A_male_JP/A1_Z4_male_female_JP.wav">
	</audio>
	<figcaption>Above examples show varied timbres and successful conversions to different singers</figcaption>
</figure>

<figure>
<figcaption><b>Voice Conversion (male &rarr; male)</b></figcaption>
<figcaption>4 examples generated with a trained model using space <b>Zc = 4</b></figcaption>
	<audio controls
		src="./audio/A_male_JP/A1_Z4_male_male_JP.wav">
	</audio>
	<audio controls
		src="./audio/A_male_JP/A3_Z4_male_male_JP.wav">
	</audio>
	<audio controls
		src="./audio/A_male_JP/A2_Z4_male_male_JP.wav">
	</audio>
	<audio controls
		src="./audio/A_male_JP/A4_Z4_male_male_JP.wav">
	</audio>
	<figcaption>Above examples show varied timbres and successful conversions to different singers</figcaption>
</figure>

<figure>
<figcaption><b>Voice Conversion (male &rarr; female)</b></figcaption>
<figcaption>Generator trained using space <b>Zc = 100</b></figcaption>
	<audio controls
		src="./audio/A_male_JP/A4_Z100_male_female_JP.wav">
	</audio>
<figcaption>Example sounds almost the same as the ground truth with <b>no voice conversion</b></figcaption>
</figure>




# NUS-48E Dataset - Female (Song 18 & ID ADIZ)

Each presented audio example follows song and singer IDs in the original NUS-48E dataset [[2]](#ref). All examples are 16-bit 22050 Hz WAV files.

<figure>
<figcaption><b>Ground truth (female)</b></figcaption>
	<audio controls
		src="./audio/A_female_EN/A_SOURCE_female_EN.wav">
	</audio>
</figure>

<figure>
<figcaption><b>Reconstruction (female)</b></figcaption>
<figcaption>Generator trained using space <b>Zc = 4</b></figcaption>
	<audio controls
		src="./audio/A_female_EN/A_Z4_RECON_female_EN.wav">
	</audio>
</figure>

<figure>
<figcaption><b>Voice Conversion (female &rarr; female)</b></figcaption>
<figcaption>4 examples generated with a trained model using space <b>Zc = 4</b></figcaption>
	<audio controls
		src="./audio/A_female_EN/A4_Z4_female_female_EN.wav">
	</audio>
	<audio controls
		src="./audio/A_female_EN/A3_Z4_female_female_EN.wav">
	</audio>
	<audio controls
		src="./audio/A_female_EN/A2_Z4_female_female_EN.wav">
	</audio>
	<audio controls
		src="./audio/A_female_EN/A1_Z4_female_female_EN.wav">
	</audio>
	<figcaption>Above examples show varied timbres and successful conversions to different singers</figcaption>
</figure>

<figure>
<figcaption><b>Voice Conversion (female &rarr; male)</b></figcaption>
<figcaption>4 examples generated with a trained model using space <b>Zc = 4</b></figcaption>
	<audio controls
		src="./audio/A_female_EN/A4_Z4_female_male_EN.wav">
	</audio>
	<audio controls
		src="./audio/A_female_EN/A3_Z4_female_male_EN.wav">
	</audio>
	<audio controls
		src="./audio/A_female_EN/A2_Z4_female_male_EN.wav">
	</audio>
	<audio controls
		src="./audio/A_female_EN/A1_Z4_female_male_EN.wav">
	</audio>
	<figcaption>Above examples show varied timbres and successful conversions to different singers</figcaption>
</figure>

<figure>
<figcaption><b>Voice Conversion (female &rarr; male)</b></figcaption>
<figcaption>Generator trained using space <b>Zc = 100</b></figcaption>
	<audio controls
		src="./audio/A_female_EN/A1_Z100_female_male_EN.wav">
	</audio>
<figcaption>Example sounds almost the same as the ground truth with <b>no voice conversion</b></figcaption>
</figure>


# NUS-48E Dataset - Male (Song 15 & ID JLEE)

Each presented audio example follows song and singer IDs in the original NUS-48E dataset [[2]](#ref). All examples are 16-bit 22050 Hz WAV files.

<figure>
<figcaption><b>Ground truth (male)</b></figcaption>
	<audio controls
		src="./audio/A_male_EN/A_SOURCE_male_EN.wav">
	</audio>
</figure>

<figure>
<figcaption><b>Reconstruction (male)</b></figcaption>
<figcaption>Generator trained using space <b>Zc = 4</b></figcaption>
	<audio controls
		src="./audio/A_male_EN/A_Z4_RECON_male_EN.wav">
	</audio>
</figure>

<figure>
<figcaption><b>Voice Conversion (male &rarr; female)</b></figcaption>
<figcaption>4 examples generated with a trained model using space <b>Zc = 4</b></figcaption>
	<audio controls
		src="./audio/A_male_EN/A4_Z4_male_female_EN.wav">
	</audio>
	<audio controls
		src="./audio/A_male_EN/A3_Z4_male_female_EN.wav">
	</audio>
	<audio controls
		src="./audio/A_male_EN/A2_Z4_male_female_EN.wav">
	</audio>
	<audio controls
		src="./audio/A_male_EN/A1_Z4_male_female_EN.wav">
	</audio>
	<figcaption>Above examples show varied timbres and successful conversions to different singers</figcaption>
</figure>

<figure>
<figcaption><b>Voice Conversion (male &rarr; male)</b></figcaption>
<figcaption>4 examples generated with a trained model using space <b>Zc = 4</b></figcaption>
	<audio controls
		src="./audio/A_male_EN/A1_Z4_male_male_EN.wav">
	</audio>
	<audio controls
		src="./audio/A_male_EN/A3_Z4_male_male_EN.wav">
	</audio>
	<audio controls
		src="./audio/A_male_EN/A2_Z4_male_male_EN.wav">
	</audio>
	<audio controls
		src="./audio/A_male_EN/A4_Z4_male_male_EN.wav">
	</audio>
	<figcaption>Above examples show varied timbres and successful conversions to different singers</figcaption>
</figure>

<figure>
<figcaption><b>Voice Conversion (male &rarr; female)</b></figcaption>
<figcaption>Generator trained using space <b>Zc = 100</b></figcaption>
	<audio controls
		src="./audio/A_male_EN/A4_Z100_male_female_EN.wav">
	</audio>
<figcaption>Example sounds almost the same as the ground truth with <b>no voice conversion</b></figcaption>
</figure>


# <a name="ref">References</a>
[1] [Yin-Jyun Luo et al. “Singing voice conversion with disentangled representations of singer and vocal technique using variational autoencoders”. In: IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP). 2020.](https://ismir19-217.github.io/icassp20-audio-sample/)

[2]  [Zhiyan Duan et al. “The NUS sung and spoken lyrics corpus: A quantitative comparison of singing and speech”. In: IEEE Asia-Pacific Signal and InformationProcessing Association Annual Summit and Conference (APSIPA ASC). 2013.](https://smcnus.comp.nus.edu.sg/nus-48e-sung-and-spoken-lyrics-corpus/)
