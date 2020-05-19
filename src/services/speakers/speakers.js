const fetch = require('node-fetch');
const apikey = process.env.SPEAKER_API_KEY;

export const enrollSpeaker = async (params) => {
  try {
    const { audio, id } = params;
    const url = `https://proxy.api.deepaffects.com/audio/generic/api/v2/sync/diarization/enroll?apikey=${apikey}`
    const enrollmentData = {
      content: audio,
      sampleRate: 4800,
      encoding: 'MP3',
      languageCode: 'en-US',
      speakerId: String(id)
    };
    return await fetch(url, {
        method: 'post',
        body: JSON.stringify(enrollmentData),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => {
      debugger;
      res.json();
    })
    .then(json => {
      debugger
    });
  } catch (err) {
    console.log('Failed to enroll speaker', err);
  }
};