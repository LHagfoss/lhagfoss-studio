declare global {
    interface Window {
      gtag: (command: string, ...args: any[]) => void;
    }
  }

export const GA_TRACKING_ID = 'GG-N5HWZ6SFMK'

export const pageview = (url: string) => {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label: string
  value: number
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}