from resemblyzer import preprocess_wav, VoiceEncoder, getEmbeds, pre_config_sampling_rate
from demo_utils import *
from pathlib import Path

# similarity measure can be used to perform speaker diarization
# (telling who is speaking when in a recording).


def checkSimilarity (username, currentSample, preSavedAudio):

    ## Get reference audios
    # Load the audio from db
    wav_fpath = Path(currentSample)
    wav = preprocess_wav(wav_fpath)

    # Cut some segments from single speakers as reference audio
    segments = [[0, 5.5], [6.5, 12], [17, 25]]
    speaker_names = [allUsers]
    speaker_wavs = [wav[int(s[0] * pre_config_sampling_rate):int(s[1]) * pre_config_sampling_rate] for s in segments]
        
    ## Compare speaker embeds to the continuous embedding of the users
    # Derive a continuous embedding of the users. We put a rate of 16, meaning that an 
    # embedding is generated every 0.0625 seconds.
    encoder = VoiceEncoder("cpu")
    similarity_dict = get_similarity_dict(cont_embeds, wav_splits = encoder.embed_utterance(wav, return_partials=True, rate=16))


    # Get the continuous similarity for every users. It amounts to a dot product between the 
    # embedding of the speaker and the continuous embedding of the interview
    response = diarization(similarity_dict, wav, preSavedAudio, allUsers)
    return response


   