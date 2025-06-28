import { useState, useEffect, use } from 'react';
import '../styles/Typewriter.css';

export default function Typewriter({ text, speed, pauseDuration }) {
    const useTypewriter = (text, speed, pauseDuration) => {
        const [displayText, setDisplayText] = useState('');
        const [isErasing, setIsErasing] = useState(false);
        const [charIndex, setCharIndex] = useState(0);
        const [wordIndex, setWordIndex] = useState(0);
        const [isPaused, setIsPaused] = useState(false);

        useEffect(() => {
            if (isPaused) return;

            const interval = setInterval(() => {
                if (!isErasing) {
                    if (charIndex < text[wordIndex].length) {
                        setDisplayText(text[wordIndex].substring(0, charIndex + 1));
                        setCharIndex(prev => prev + 1);
                    } else {
                        setIsPaused(true);
                        clearInterval(interval);
                        setTimeout(() => {
                            setIsErasing(true);
                            setIsPaused(false);
                        }, pauseDuration);
                    }
                }
            }, speed);

            return () => clearInterval(interval);
        }, [charIndex, isErasing, isPaused, text, wordIndex, speed, pauseDuration]);

        useEffect(() => {
            if (isPaused) return;

            const interval = setInterval(() => {
                if (isErasing) {
                    if (charIndex > 0) {
                        setDisplayText(text[wordIndex].substring(0, charIndex - 1));
                        setCharIndex(prev => prev - 1);
                    } else {
                        setIsPaused(true);
                        clearInterval(interval);
                        setTimeout(() => {
                            setIsErasing(false);
                            setWordIndex((prev) => (prev + 1) % text.length);
                            setIsPaused(false);
                        }, pauseDuration);
                    }
                }
            }, speed);

            return () => clearInterval(interval);
        }, [charIndex, isErasing, isPaused, text, wordIndex, speed, pauseDuration]);


        return displayText;
    };

    const displayText = useTypewriter(text, speed, pauseDuration);

    return (
        <div>
            <h1>I am a <span className='keywords'>{displayText}</span></h1>
        </div>
    )
}