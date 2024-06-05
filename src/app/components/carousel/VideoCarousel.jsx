'use client'

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import cover from '../../../../public/preload/cover_video.jpg'

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMediaUrl, setSelectedMediaUrl] = useState('');

  const mediaUrls = [
    'https://jpmgroups.com/asset/video-graphic/video_1.mp4',
    'https://jpmgroups.com/asset/video-graphic/video_2.mp4',
    'https://jpmgroups.com/asset/video-graphic/video_4.mp4',
  ];

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  const handleMediaClick = (mediaUrl) => {
    setSelectedMediaUrl(mediaUrl);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on('reInit', onScroll).on('scroll', onScroll).on('slideFocus', onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number" onClick={() => handleMediaClick(mediaUrls[index % mediaUrls.length])}>
                <video
                  className="embla__slide__video p-5 transition-transform duration-200 transform hover:scale-105"
                  preload='none'
                  poster='https://jpmgroups.com/asset/images/cover video_black bg.jpg'
                  src={mediaUrls[index % mediaUrls.length]}
                  alt={`Video ${index + 1}`}
                  width="800" // Replace with the desired width
                  height="600" // Replace with the desired height
                  controls
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__progress">
          <div
            className="embla__progress__bar"
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
      </div>

    </div>
  );
};

export default EmblaCarousel;
