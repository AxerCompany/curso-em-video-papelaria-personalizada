import React, { useEffect, useRef } from 'react';
import { wiapyConfig } from '../config/wiapy';

declare global {
  interface Window {
    initWiapyUpsell?: (options: {
      elementId?: string;
      linkUrl?: string;
      linkText?: string;
      styles?: {
        backgroundColor?: string;
        hoverBackgroundColor?: string;
        fontSize?: string;
        borderRadius?: string;
        [key: string]: unknown;
      };
      refusalLinkUrl?: string;
      refusalLinkText?: string;
      refusalLinkColor?: string;
    }) => void;
  }
}

interface WiapyUpsellProps {
  elementId?: string;
  className?: string;
  customLinkUrl?: string;
  customRefusalUrl?: string;
  customRefusalColor?: string;
  onRefusalClick?: () => void;
}

export const WiapyUpsell: React.FC<WiapyUpsellProps> = ({
  elementId = 'wiapy_upsell',
  className = '',
  customLinkUrl,
  customRefusalUrl,
  customRefusalColor,
  onRefusalClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    let timeoutId: number;
    let attempts = 0;
    const maxAttempts = 30; // 6 seconds max

    const init = () => {
      attempts++;
      if (typeof window.initWiapyUpsell === 'function') {
        try {
          window.initWiapyUpsell({
            elementId,
            linkUrl: customLinkUrl || wiapyConfig.linkUrl,
            linkText: wiapyConfig.linkText,
            styles: wiapyConfig.styles,
            refusalLinkUrl: customRefusalUrl || wiapyConfig.refusalLinkUrl,
            refusalLinkText: wiapyConfig.refusalLinkText,
            refusalLinkColor: customRefusalColor || wiapyConfig.refusalLinkColor,
          });
          initializedRef.current = true;
        } catch (err) {
          console.error('[WiapyUpsell] Erro ao inicializar:', err);
        }
      } else if (attempts < maxAttempts) {
        timeoutId = window.setTimeout(init, 200);
      }
    };

    // Small delay to ensure DOM element is mounted
    timeoutId = window.setTimeout(init, 50);

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [elementId, customLinkUrl, customRefusalUrl, customRefusalColor]);

  // Intercept refusal link click inside Wiapy container to trigger onRefusalClick
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !onRefusalClick) return;

    const handleClickCapture = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (anchor && container.contains(anchor)) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        onRefusalClick();
      }
    };

    container.addEventListener('click', handleClickCapture, true);
    return () => {
      container.removeEventListener('click', handleClickCapture, true);
    };
  }, [onRefusalClick]);

  return (
    <div className={`wiapy-container-wrapper w-full ${className}`}>
      {/* Official Wiapy container */}
      <div id={elementId} ref={containerRef} className="w-full text-center" />
    </div>
  );
};
