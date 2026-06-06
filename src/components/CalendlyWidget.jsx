"use client";

import React, { useEffect, useRef } from 'react';

const CalendlyWidget = ({ url }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Clear previous widget content to prevent duplicates if any
        if (containerRef.current) {
            containerRef.current.innerHTML = '';
        }

        // Add the Calendly inline widget container dynamically
        const widgetContainer = document.createElement('div');
        widgetContainer.className = 'calendly-inline-widget';
        widgetContainer.setAttribute('data-url', url);
        widgetContainer.style.minWidth = '320px';
        widgetContainer.style.height = '700px';

        containerRef.current.appendChild(widgetContainer);

        // Load the Calendly script dynamically on mount
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;

        containerRef.current.appendChild(script);

        return () => {
            // Cleanup on unmount
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, [url]);

    return (
        <div ref={containerRef} className="calendly-wrapper" style={{ borderRadius: '15px', overflow: 'hidden' }}>
        </div>
    );
};

export default CalendlyWidget;
