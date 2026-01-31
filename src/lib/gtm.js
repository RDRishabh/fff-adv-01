export const GTM_ID = 'GTM-W2KB3VDM';

// Ensure dataLayer is always initialized
const initDataLayer = () => {
    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
    }
};

export const pageview = (url) => {
    initDataLayer();
    if (window.dataLayer) {
        window.dataLayer.push({
            event: 'pageview',
            page: url,
        });
    }
};

export const event = ({ action, category, label, value, ...params }) => {
    initDataLayer();
    if (window.dataLayer) {
        window.dataLayer.push({
            event: action,
            event_category: category,
            event_label: label,
            value: value,
            ...params,
        });
    }

    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', action, {
            content_category: category,
            content_name: label,
            value: value,
            ...params,
        });
    }
};

// Specialized Lead event for Meta Pixel
export const trackLead = (params = {}) => {
    initDataLayer();
    if (window.dataLayer) {
        window.dataLayer.push({
            event: 'Lead',
            ...params,
        });
    }

    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', params);
    }
};
