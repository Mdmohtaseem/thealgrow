"use client";
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Play, Volume2, VolumeX, X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Home3NewTestimonial.module.css';

const testimonials = [
    {
        id: 1,
        avatar: '/assets/img/home3/testimonials/avatar1.jpg',
        quote: '"The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!"',
        signature: 'Terry Linde',
        position: 'Founder of Destiny Management',
    },
    {
        id: 2,
        avatar: '/assets/img/home3/testimonials/avatar2.jpg',
        quote: '',
        signature: 'Terry Linde',
        position: 'Founder of Destiny Management',
        isVideo: true,
        videoThumbnail: '/assets/img/home3/testimonials/video-thumb.jpg',
    },
    {
        id: 3,
        avatar: '/assets/img/home3/testimonials/avatar3.jpg',
        quote: '"DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!"',
        signature: 'Rob West',
        position: 'CEO of Kingdom Advisors',
    },
    {
        id: 4,
        avatar: '/assets/img/home3/testimonials/avatar4.jpg',
        quote: '"The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!"',
        signature: 'Don Ty',
        position: 'CEO of Ki...',
    },
];

const VIDEO_URL = '/assets/video/destiny management.mp4';

export default function Home3NewTestimonial() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobilePlaying, setIsMobilePlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
    const videoRef = useRef(null);
    const modalVideoRef = useRef(null);
    const carouselRef = useRef(null);
    const lastTimeRef = useRef(0);

    // Detect mobile device
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Handle hover for desktop - play/pause video (resume from last position)
    useEffect(() => {
        if (!isMobile && videoRef.current) {
            if (isHovered) {
                // Resume from last paused position
                videoRef.current.currentTime = lastTimeRef.current;
                videoRef.current.play().catch(() => {
                    // Autoplay blocked, ignore
                });
                setHasStartedPlaying(true);
            } else {
                // Save current position before pausing
                if (videoRef.current.currentTime > 0) {
                    lastTimeRef.current = videoRef.current.currentTime;
                }
                videoRef.current.pause();
            }
        }
    }, [isHovered, isMobile]);

    // Handle mobile play/pause toggle
    const toggleMobilePlay = useCallback(() => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsMobilePlaying(true);
                setHasStartedPlaying(true);
            } else {
                videoRef.current.pause();
                setIsMobilePlaying(false);
            }
        }
    }, []);

    // Toggle mute
    const toggleMute = useCallback(() => {
        if (isModalOpen && modalVideoRef.current) {
            modalVideoRef.current.muted = !isMuted;
        } else if (videoRef.current) {
            videoRef.current.muted = !isMuted;
        }
        setIsMuted(!isMuted);
    }, [isMuted, isModalOpen]);

    // Open modal
    const openModal = useCallback(() => {
        if (!isMobile) {
            setIsModalOpen(true);
            // Pause card video when modal opens and save position
            if (videoRef.current) {
                lastTimeRef.current = videoRef.current.currentTime;
                videoRef.current.pause();
            }
        }
    }, [isMobile]);

    // Close modal
    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        if (modalVideoRef.current) {
            modalVideoRef.current.pause();
            modalVideoRef.current.currentTime = 0;
        }
    }, []);

    return (
        <section className={styles.testimonialSection}>
            {/* Header Container */}
            <div className="container mb-70 mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title three">
                            <span>TESTIMONIALS</span>
                            <h2>Don&apos;t take our word for it! Hear it from our partners.</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel Container */}
            <div className={styles.carouselContainer}>
                <div
                    ref={carouselRef}
                    className={styles.carouselScroll}
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className={styles.carouselItem}
                        >
                            {testimonial.isVideo ? (
                                // Video Testimonial Card
                                <div
                                    className={styles.videoCard}
                                    onMouseEnter={() => !isMobile && setIsHovered(true)}
                                    onMouseLeave={() => !isMobile && setIsHovered(false)}
                                    onClick={() => isMobile && toggleMobilePlay()}
                                >
                                    {/* Video Element */}
                                    <video
                                        ref={videoRef}
                                        src={VIDEO_URL}
                                        className={`${styles.videoElement} ${(isMobile && !isMobilePlaying && !hasStartedPlaying) || (!isMobile && !isHovered && !hasStartedPlaying) ? styles.opacity0 : styles.opacity100
                                            }`}
                                        muted={isMuted}
                                        loop={false}
                                        playsInline
                                        onEnded={() => {
                                            setHasStartedPlaying(false);
                                            setIsMobilePlaying(false);
                                        }}
                                    />

                                    {/* Thumbnail */}
                                    {!hasStartedPlaying && (
                                        <img
                                            src={testimonial.videoThumbnail}
                                            alt="Video testimonial"
                                            className={styles.videoThumbnail}
                                        />
                                    )}

                                    {/* Dark Overlay */}
                                    <div className={`${styles.darkOverlay} ${isMobile && isMobilePlaying ? styles.opacity0 : styles.bgBlack30
                                        }`} />

                                    {/* Avatar */}
                                    <div className={styles.avatar}>
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.signature}
                                            className={styles.avatarImg}
                                        />
                                    </div>

                                    {/* Mute/Unmute Button */}
                                    {(isHovered || isMobilePlaying) && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleMute();
                                            }}
                                            className={styles.muteButton}
                                        >
                                            {isMuted ? (
                                                <VolumeX className="w-5 h-5 text-white" />
                                            ) : (
                                                <Volume2 className="w-5 h-5 text-white" />
                                            )}
                                        </button>
                                    )}

                                    {/* Play Button - Mobile Only */}
                                    {isMobile && !isMobilePlaying && (
                                        <div
                                            className={styles.playButtonMobile}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleMobilePlay();
                                            }}
                                        >
                                            <div className={styles.playButtonCircle}>
                                                <Play className="w-6 h-6 text-white fill-white ml-1" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Click to open modal - Desktop Only */}
                                    {!isMobile && (
                                        <div
                                            className={styles.clickOverlay}
                                            onClick={openModal}
                                        />
                                    )}

                                    {/* Bottom Content */}
                                    <div className={styles.bottomContent}>
                                        <p className={styles.signatureWhite}>
                                            {testimonial.signature}
                                        </p>
                                        <p className={styles.positionWhite}>
                                            {testimonial.position}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                // Regular Testimonial Card
                                <div className={styles.regularCard}>
                                    {/* Avatar */}
                                    <div className={styles.regularAvatar}>
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.signature}
                                            className={styles.regularAvatarImg}
                                        />
                                    </div>

                                    {/* Quote */}
                                    <p className={styles.quote}>
                                        {testimonial.quote}
                                    </p>

                                    {/* Signature & Position */}
                                    <div className={styles.regularBottom}>
                                        <p className={styles.signatureDark}>
                                            {testimonial.signature}
                                        </p>
                                        <p className={styles.positionDark}>
                                            {testimonial.position}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    {/* Spacer */}
                    <div className={styles.spacer} />
                </div>
            </div>

            {/* Navigation Buttons Container */}
            <div className="container mt-5">
                <div className={styles.navButtons}>
                    <button
                        onClick={() => {
                            if (carouselRef.current) {
                                carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
                            }
                        }}
                        className={styles.navButton}
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                        onClick={() => {
                            if (carouselRef.current) {
                                carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                            }
                        }}
                        className={styles.navButton}
                        aria-label="Next testimonials"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Video Modal - Desktop Only */}
            {isModalOpen && !isMobile && (
                <div
                    className={styles.modalOverlay}
                    onClick={closeModal}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className={styles.closeButton}
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>

                    {/* Mute/Unmute Button in Modal */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleMute();
                        }}
                        className={styles.modalMuteButton}
                    >
                        {isMuted ? (
                            <VolumeX className="w-6 h-6 text-white" />
                        ) : (
                            <Volume2 className="w-6 h-6 text-white" />
                        )}
                    </button>

                    {/* Video */}
                    <div
                        className={styles.modalVideoContainer}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <video
                            ref={modalVideoRef}
                            src={VIDEO_URL}
                            className={styles.modalVideo}
                            autoPlay
                            muted={isMuted}
                            controls
                            playsInline
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
