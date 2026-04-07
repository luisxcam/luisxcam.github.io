---
slug: "building-a-real-time-audio-visualizer-with-webgl"
title: "BUILDING A REAL-TIME AUDIO VISUALIZER WITH WEBGL"
date: "2026-02-22"
tags: ["webgl", "audio", "tutorial"]
excerpt: "How I turned FFT data into a brutal visual experience that responds to every breakdown."
coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800"
---

## Getting the FFT Data

The Web Audio API gives you an `AnalyserNode` that exposes frequency bin data as a `Uint8Array`. Wire it up to an audio source and you're feeding raw spectral data to your renderer.

```typescript
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
analyser.fftSize = 2048;

const source = audioCtx.createMediaElementSource(audioElement);
source.connect(analyser);
analyser.connect(audioCtx.destination);

const dataArray = new Uint8Array(analyser.frequencyBinCount);
analyser.getByteFrequencyData(dataArray);
```

## Rendering with WebGL

![FFT visualizer output during a breakdown](https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800)

Each frame, upload the FFT data to a WebGL texture and sample it in a fragment shader. The shader maps frequency bins to bar heights and colors them based on amplitude.

```glsl
uniform sampler2D uFFT;
uniform float uTime;

void main() {
    float freq = texture2D(uFFT, vec2(vUv.x, 0.5)).r;
    float bar = step(vUv.y, freq);
    vec3 color = mix(vec3(0.0, 1.0, 0.4), vec3(0.9, 0.1, 0.1), freq);
    gl_FragColor = vec4(color * bar, 1.0);
}
```

The result: a bar graph that reacts in real-time to every snare hit.
