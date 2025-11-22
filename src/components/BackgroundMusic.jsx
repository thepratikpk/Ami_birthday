import { useRef, useEffect } from 'react';
import bgmMusic from '../assets/bgm.mp3';

const BackgroundMusic = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.loop = true;
            audio.volume = 0.15; // Set to 15% volume for subtle background music

            // Try to play immediately
            const playAudio = async () => {
                try {
                    await audio.play();
                    console.log('Background music started playing');
                } catch (error) {
                    console.log('Auto-play blocked, will try after user interaction');

                    // If auto-play is blocked, try to play after any user interaction
                    const handleUserInteraction = async () => {
                        try {
                            await audio.play();
                            console.log('Background music started after user interaction');
                            // Remove event listeners after successful play
                            document.removeEventListener('click', handleUserInteraction);
                            document.removeEventListener('touchstart', handleUserInteraction);
                            document.removeEventListener('keydown', handleUserInteraction);
                            document.removeEventListener('scroll', handleUserInteraction);
                        } catch (err) {
                            console.log('Failed to play audio:', err);
                        }
                    };

                    // Listen for various user interactions
                    document.addEventListener('click', handleUserInteraction);
                    document.addEventListener('touchstart', handleUserInteraction);
                    document.addEventListener('keydown', handleUserInteraction);
                    document.addEventListener('scroll', handleUserInteraction);
                }
            };

            // Small delay to ensure page is loaded
            setTimeout(playAudio, 1000);
        }

        // Cleanup
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, []);

    return (
        <audio
            ref={audioRef}
            preload="auto"
            loop
            style={{ display: 'none' }}
        >
            <source src={bgmMusic} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    );
};

export default BackgroundMusic;