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
}

export const WiapyUpsell: React.FC<WiapyUpsellProps> = ({
  elementId = 'wiapy_upsell',
  className = '',
  customLinkUrl,
  customRefusalUrl,
  customRefusalColor,
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

  return (
    <div className={`wiapy-container-wrapper w-full ${className}`}>
      {/* Official Wiapy container */}
      <div id={elementId} ref={containerRef} className="w-full text-center" />
    </div>
  );
};
