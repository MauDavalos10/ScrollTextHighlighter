import React, { useEffect } from 'react';

const ScrollTextHighlighter = ({ fadedText, className }) => {
    const charsToSpans = (text) => {
        return text.split('').map((char, index) => <span key={index}>{char}</span>);
    };

    const renderTextWithSpans = (text) => {
        const elements = [];
        let temp = '';
        for (let i = 0; i < text.length; i++) {
            if (text.substring(i, i + 6) === '<br />') {
                if (temp) {
                    elements.push(...charsToSpans(temp));
                    temp = '';
                }
                elements.push(<br key={i} />);
                i += 5;
            } else {
                temp += text[i];
            }
        }
        if (temp) {
            elements.push(...charsToSpans(temp));
        }
        return elements;
    };

    useEffect(() => {
        const handleScroll = () => {
            const paragraph = document.querySelector('.paragraph');

            paragraph.childNodes.forEach((letter, i) => {
                if (
                    (paragraph.getBoundingClientRect().y - window.innerHeight / 2) * -1 >
                    i
                ) {
                    letter.style.color = 'black';
                } else {
                    letter.style.color = 'lightGray';
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <p className={`paragraph ${className}`}>{renderTextWithSpans(fadedText)}</p>
    );
};

export default ScrollTextHighlighter;
