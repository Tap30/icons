import {html, TemplateResult} from "lit";
import "./index";

export default {
  title: "Icons",
  component: "tap-icon",
  argTypes: {
    height: {
      control: {type: "number"},
      description: "The icon height",
      defaultValue: 24,
    },
    width: {
      control: {type: "number"},
      description: "The icon width",
      defaultValue: 24,
    },
    color: {
      control: {type: "text"},
      description: "The icon color, accepts CSS values",
      defaultValue: "inherit",
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;

  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  height: number,
  width: number,
  color: string,
}

const IconSetTemplate: Story<ArgTypes> = ({ height, width, color }: ArgTypes) => html`
<div style="display: flex; flex-wrap: wrap">
  <tap-icon-alarm-clock color=${color} width=${width} height=${height}></tap-icon-alarm-clock>
  <tap-icon-alarm-clock-fill color=${color} width=${width} height=${height}></tap-icon-alarm-clock-fill>
  <tap-icon-arrow-top-right color=${color} width=${width} height=${height}></tap-icon-arrow-top-right>
  <tap-icon-arrow-top-right-fill color=${color} width=${width} height=${height}></tap-icon-arrow-top-right-fill>
  <tap-icon-arrow-top-right-question color=${color} width=${width} height=${height}></tap-icon-arrow-top-right-question>
  <tap-icon-arrow-top-right-question-fill color=${color} width=${width} height=${height}></tap-icon-arrow-top-right-question-fill>
  <tap-icon-banknote color=${color} width=${width} height=${height}></tap-icon-banknote>
  <tap-icon-banknote-fill color=${color} width=${width} height=${height}></tap-icon-banknote-fill>
  <tap-icon-banknote-two color=${color} width=${width} height=${height}></tap-icon-banknote-two>
  <tap-icon-banknote-two-fill color=${color} width=${width} height=${height}></tap-icon-banknote-two-fill>
  <tap-icon-bell color=${color} width=${width} height=${height}></tap-icon-bell>
  <tap-icon-bell-dot-fill color=${color} width=${width} height=${height}></tap-icon-bell-dot-fill>
  <tap-icon-bell-fill color=${color} width=${width} height=${height}></tap-icon-bell-fill>
  <tap-icon-bookmark color=${color} width=${width} height=${height}></tap-icon-bookmark>
  <tap-icon-bookmark-fill color=${color} width=${width} height=${height}></tap-icon-bookmark-fill>
  <tap-icon-box color=${color} width=${width} height=${height}></tap-icon-box>
  <tap-icon-box-check color=${color} width=${width} height=${height}></tap-icon-box-check>
  <tap-icon-box-fill color=${color} width=${width} height=${height}></tap-icon-box-fill>
  <tap-icon-briefcase color=${color} width=${width} height=${height}></tap-icon-briefcase>
  <tap-icon-briefcase-fill color=${color} width=${width} height=${height}></tap-icon-briefcase-fill>
  <tap-icon-building color=${color} width=${width} height=${height}></tap-icon-building>
  <tap-icon-building-fill color=${color} width=${width} height=${height}></tap-icon-building-fill>
  <tap-icon-calendar color=${color} width=${width} height=${height}></tap-icon-calendar>
  <tap-icon-calendar-fill color=${color} width=${width} height=${height}></tap-icon-calendar-fill>
  <tap-icon-call-dialog-box color=${color} width=${width} height=${height}></tap-icon-call-dialog-box>
  <tap-icon-call-left color=${color} width=${width} height=${height}></tap-icon-call-left>
  <tap-icon-call-left-slash color=${color} width=${width} height=${height}></tap-icon-call-left-slash>
  <tap-icon-call-righ color=${color} width=${width} height=${height}></tap-icon-call-righ>
  <tap-icon-call-right-slash color=${color} width=${width} height=${height}></tap-icon-call-right-slash>
  <tap-icon-camera color=${color} width=${width} height=${height}></tap-icon-camera>
  <tap-icon-camera-fill color=${color} width=${width} height=${height}></tap-icon-camera-fill>
  <tap-icon-camera-plus color=${color} width=${width} height=${height}></tap-icon-camera-plus>
  <tap-icon-car color=${color} width=${width} height=${height}></tap-icon-car>
  <tap-icon-car-clock color=${color} width=${width} height=${height}></tap-icon-car-clock>
  <tap-icon-car-clock-fill color=${color} width=${width} height=${height}></tap-icon-car-clock-fill>
  <tap-icon-car-fill color=${color} width=${width} height=${height}></tap-icon-car-fill>
  <tap-icon-car-slash color=${color} width=${width} height=${height}></tap-icon-car-slash>
  <tap-icon-car-slash-fill color=${color} width=${width} height=${height}></tap-icon-car-slash-fill>
  <tap-icon-car-spark color=${color} width=${width} height=${height}></tap-icon-car-spark>
  <tap-icon-card color=${color} width=${width} height=${height}></tap-icon-card>
  <tap-icon-card-fill color=${color} width=${width} height=${height}></tap-icon-card-fill>
  <tap-icon-card-left-arrow color=${color} width=${width} height=${height}></tap-icon-card-left-arrow>
  <tap-icon-card-left-arrow-fill color=${color} width=${width} height=${height}></tap-icon-card-left-arrow-fill>
  <tap-icon-card-plus color=${color} width=${width} height=${height}></tap-icon-card-plus>
  <tap-icon-card-plus-fill color=${color} width=${width} height=${height}></tap-icon-card-plus-fill>
  <tap-icon-card-right-arrow color=${color} width=${width} height=${height}></tap-icon-card-right-arrow>
  <tap-icon-card-right-arrow-fill color=${color} width=${width} height=${height}></tap-icon-card-right-arrow-fill>
  <tap-icon-card-spark color=${color} width=${width} height=${height}></tap-icon-card-spark>
  <tap-icon-card-spark-fill color=${color} width=${width} height=${height}></tap-icon-card-spark-fill>
  <tap-icon-card-time color=${color} width=${width} height=${height}></tap-icon-card-time>
  <tap-icon-card-time-fill color=${color} width=${width} height=${height}></tap-icon-card-time-fill>
  <tap-icon-check color=${color} width=${width} height=${height}></tap-icon-check>
  <tap-icon-check-fill color=${color} width=${width} height=${height}></tap-icon-check-fill>
  <tap-icon-circle-check color=${color} width=${width} height=${height}></tap-icon-circle-check>
  <tap-icon-circle-check-fill color=${color} width=${width} height=${height}></tap-icon-circle-check-fill>
  <tap-icon-circle-check-small color=${color} width=${width} height=${height}></tap-icon-circle-check-small>
  <tap-icon-circle-check-small-fill color=${color} width=${width} height=${height}></tap-icon-circle-check-small-fill>
  <tap-icon-circle-cross color=${color} width=${width} height=${height}></tap-icon-circle-cross>
  <tap-icon-circle-cross-fill color=${color} width=${width} height=${height}></tap-icon-circle-cross-fill>
  <tap-icon-circle-exclamation color=${color} width=${width} height=${height}></tap-icon-circle-exclamation>
  <tap-icon-circle-exclamation-fill color=${color} width=${width} height=${height}></tap-icon-circle-exclamation-fill>
  <tap-icon-circle-fill-1 color=${color} width=${width} height=${height}></tap-icon-circle-fill-1>
  <tap-icon-circle-fill-2 color=${color} width=${width} height=${height}></tap-icon-circle-fill-2>
  <tap-icon-circle-fill-3 color=${color} width=${width} height=${height}></tap-icon-circle-fill-3>
  <tap-icon-circle-fill-4 color=${color} width=${width} height=${height}></tap-icon-circle-fill-4>
  <tap-icon-circle-fill-5 color=${color} width=${width} height=${height}></tap-icon-circle-fill-5>
  <tap-icon-circle-fill-6 color=${color} width=${width} height=${height}></tap-icon-circle-fill-6>
  <tap-icon-circle-fill-7 color=${color} width=${width} height=${height}></tap-icon-circle-fill-7>
  <tap-icon-circle-fill-8 color=${color} width=${width} height=${height}></tap-icon-circle-fill-8>
  <tap-icon-circle-fill-9 color=${color} width=${width} height=${height}></tap-icon-circle-fill-9>
  <tap-icon-circle-information color=${color} width=${width} height=${height}></tap-icon-circle-information>
  <tap-icon-circle-information-fill color=${color} width=${width} height=${height}></tap-icon-circle-information-fill>
  <tap-icon-circle-minus color=${color} width=${width} height=${height}></tap-icon-circle-minus>
  <tap-icon-circle-minus-fill color=${color} width=${width} height=${height}></tap-icon-circle-minus-fill>
  <tap-icon-circle-more-fill color=${color} width=${width} height=${height}></tap-icon-circle-more-fill>
  <tap-icon-circle-outline-1 color=${color} width=${width} height=${height}></tap-icon-circle-outline-1>
  <tap-icon-circle-outline-2 color=${color} width=${width} height=${height}></tap-icon-circle-outline-2>
  <tap-icon-circle-outline-3 color=${color} width=${width} height=${height}></tap-icon-circle-outline-3>
  <tap-icon-circle-outline-4 color=${color} width=${width} height=${height}></tap-icon-circle-outline-4>
  <tap-icon-circle-outline-5 color=${color} width=${width} height=${height}></tap-icon-circle-outline-5>
  <tap-icon-circle-outline-6 color=${color} width=${width} height=${height}></tap-icon-circle-outline-6>
  <tap-icon-circle-outline-7 color=${color} width=${width} height=${height}></tap-icon-circle-outline-7>
  <tap-icon-circle-outline-8 color=${color} width=${width} height=${height}></tap-icon-circle-outline-8>
  <tap-icon-circle-outline-9 color=${color} width=${width} height=${height}></tap-icon-circle-outline-9>
  <tap-icon-circle-person color=${color} width=${width} height=${height}></tap-icon-circle-person>
  <tap-icon-circle-person-fill color=${color} width=${width} height=${height}></tap-icon-circle-person-fill>
  <tap-icon-circle-person-fill-1 color=${color} width=${width} height=${height}></tap-icon-circle-person-fill-1>
  <tap-icon-circle-plus color=${color} width=${width} height=${height}></tap-icon-circle-plus>
  <tap-icon-circle-plus-fill color=${color} width=${width} height=${height}></tap-icon-circle-plus-fill>
  <tap-icon-circle-question-fill color=${color} width=${width} height=${height}></tap-icon-circle-question-fill>
  <tap-icon-circle-star color=${color} width=${width} height=${height}></tap-icon-circle-star>
  <tap-icon-circle-star-fill color=${color} width=${width} height=${height}></tap-icon-circle-star-fill>
  <tap-icon-circle-thunder color=${color} width=${width} height=${height}></tap-icon-circle-thunder>
  <tap-icon-circle-thunder-fill color=${color} width=${width} height=${height}></tap-icon-circle-thunder-fill>
  <tap-icon-clipboard-clock color=${color} width=${width} height=${height}></tap-icon-clipboard-clock>
  <tap-icon-clipboard-clock-fill color=${color} width=${width} height=${height}></tap-icon-clipboard-clock-fill>
  <tap-icon-clips-together color=${color} width=${width} height=${height}></tap-icon-clips-together>
  <tap-icon-clock color=${color} width=${width} height=${height}></tap-icon-clock>
  <tap-icon-clock-arrow-circlepath color=${color} width=${width} height=${height}></tap-icon-clock-arrow-circlepath>
  <tap-icon-clock-dashed color=${color} width=${width} height=${height}></tap-icon-clock-dashed>
  <tap-icon-clock-fill color=${color} width=${width} height=${height}></tap-icon-clock-fill>
  <tap-icon-clock-small color=${color} width=${width} height=${height}></tap-icon-clock-small>
  <tap-icon-clock-small-fill color=${color} width=${width} height=${height}></tap-icon-clock-small-fill>
  <tap-icon-copy color=${color} width=${width} height=${height}></tap-icon-copy>
  <tap-icon-copy-fill color=${color} width=${width} height=${height}></tap-icon-copy-fill>
  <tap-icon-coupon color=${color} width=${width} height=${height}></tap-icon-coupon>
  <tap-icon-coupon-fill color=${color} width=${width} height=${height}></tap-icon-coupon-fill>
  <tap-icon-coupon-puched color=${color} width=${width} height=${height}></tap-icon-coupon-puched>
  <tap-icon-coupon-puched-fill color=${color} width=${width} height=${height}></tap-icon-coupon-puched-fill>
  <tap-icon-cross color=${color} width=${width} height=${height}></tap-icon-cross>
  <tap-icon-cross-fill color=${color} width=${width} height=${height}></tap-icon-cross-fill>
  <tap-icon-default color=${color} width=${width} height=${height}></tap-icon-default>
  <tap-icon-default-1 color=${color} width=${width} height=${height}></tap-icon-default-1>
  <tap-icon-default-2 color=${color} width=${width} height=${height}></tap-icon-default-2>
  <tap-icon-default-3 color=${color} width=${width} height=${height}></tap-icon-default-3>
  <tap-icon-default-4 color=${color} width=${width} height=${height}></tap-icon-default-4>
  <tap-icon-default-5 color=${color} width=${width} height=${height}></tap-icon-default-5>
  <tap-icon-default-6 color=${color} width=${width} height=${height}></tap-icon-default-6>
  <tap-icon-default-7 color=${color} width=${width} height=${height}></tap-icon-default-7>
  <tap-icon-default-8 color=${color} width=${width} height=${height}></tap-icon-default-8>
  <tap-icon-default-9 color=${color} width=${width} height=${height}></tap-icon-default-9>
  <tap-icon-default-fill color=${color} width=${width} height=${height}></tap-icon-default-fill>
  <tap-icon-dialog-box-text color=${color} width=${width} height=${height}></tap-icon-dialog-box-text>
  <tap-icon-dialog-box-text-fill color=${color} width=${width} height=${height}></tap-icon-dialog-box-text-fill>
  <tap-icon-dialogbox-question color=${color} width=${width} height=${height}></tap-icon-dialogbox-question>
  <tap-icon-diamond-arrow-turn-right color=${color} width=${width} height=${height}></tap-icon-diamond-arrow-turn-right>
  <tap-icon-diamond-arrow-turn-right-1 color=${color} width=${width} height=${height}></tap-icon-diamond-arrow-turn-right-1>
  <tap-icon-dot-fill color=${color} width=${width} height=${height}></tap-icon-dot-fill>
  <tap-icon-double-check color=${color} width=${width} height=${height}></tap-icon-double-check>
  <tap-icon-ear-slash color=${color} width=${width} height=${height}></tap-icon-ear-slash>
  <tap-icon-envelope color=${color} width=${width} height=${height}></tap-icon-envelope>
  <tap-icon-envelope-fill color=${color} width=${width} height=${height}></tap-icon-envelope-fill>
  <tap-icon-envelope-open color=${color} width=${width} height=${height}></tap-icon-envelope-open>
  <tap-icon-envelope-open-fill color=${color} width=${width} height=${height}></tap-icon-envelope-open-fill>
  <tap-icon-exclamation color=${color} width=${width} height=${height}></tap-icon-exclamation>
  <tap-icon-exclamation-fill color=${color} width=${width} height=${height}></tap-icon-exclamation-fill>
  <tap-icon-eye color=${color} width=${width} height=${height}></tap-icon-eye>
  <tap-icon-eye-fill color=${color} width=${width} height=${height}></tap-icon-eye-fill>
  <tap-icon-eye-slash color=${color} width=${width} height=${height}></tap-icon-eye-slash>
  <tap-icon-eye-slash-fill color=${color} width=${width} height=${height}></tap-icon-eye-slash-fill>
  <tap-icon-face-sad color=${color} width=${width} height=${height}></tap-icon-face-sad>
  <tap-icon-face-sad-fill color=${color} width=${width} height=${height}></tap-icon-face-sad-fill>
  <tap-icon-face-smile color=${color} width=${width} height=${height}></tap-icon-face-smile>
  <tap-icon-face-smile-fill color=${color} width=${width} height=${height}></tap-icon-face-smile-fill>
  <tap-icon-finger-left-fill color=${color} width=${width} height=${height}></tap-icon-finger-left-fill>
  <tap-icon-finger-swipe-vertical color=${color} width=${width} height=${height}></tap-icon-finger-swipe-vertical>
  <tap-icon-finger-touch color=${color} width=${width} height=${height}></tap-icon-finger-touch>
  <tap-icon-finger-up-fill color=${color} width=${width} height=${height}></tap-icon-finger-up-fill>
  <tap-icon-fire color=${color} width=${width} height=${height}></tap-icon-fire>
  <tap-icon-fire-fill color=${color} width=${width} height=${height}></tap-icon-fire-fill>
  <tap-icon-flag color=${color} width=${width} height=${height}></tap-icon-flag>
  <tap-icon-flag-fill color=${color} width=${width} height=${height}></tap-icon-flag-fill>
  <tap-icon-gas-station color=${color} width=${width} height=${height}></tap-icon-gas-station>
  <tap-icon-gas-station-fill color=${color} width=${width} height=${height}></tap-icon-gas-station-fill>
  <tap-icon-gear color=${color} width=${width} height=${height}></tap-icon-gear>
  <tap-icon-gear-fill color=${color} width=${width} height=${height}></tap-icon-gear-fill>
  <tap-icon-gift color=${color} width=${width} height=${height}></tap-icon-gift>
  <tap-icon-graduation-cap color=${color} width=${width} height=${height}></tap-icon-graduation-cap>
  <tap-icon-graduation-cap-fill color=${color} width=${width} height=${height}></tap-icon-graduation-cap-fill>
  <tap-icon-headphone color=${color} width=${width} height=${height}></tap-icon-headphone>
  <tap-icon-headphone-fill color=${color} width=${width} height=${height}></tap-icon-headphone-fill>
  <tap-icon-heart color=${color} width=${width} height=${height}></tap-icon-heart>
  <tap-icon-heart-broken-fill color=${color} width=${width} height=${height}></tap-icon-heart-broken-fill>
  <tap-icon-heart-fill color=${color} width=${width} height=${height}></tap-icon-heart-fill>
  <tap-icon-helmets color=${color} width=${width} height=${height}></tap-icon-helmets>
  <tap-icon-helmets-fill color=${color} width=${width} height=${height}></tap-icon-helmets-fill>
  <tap-icon-home color=${color} width=${width} height=${height}></tap-icon-home>
  <tap-icon-home-fill color=${color} width=${width} height=${height}></tap-icon-home-fill>
  <tap-icon-hourglass color=${color} width=${width} height=${height}></tap-icon-hourglass>
  <tap-icon-hourglass-fill color=${color} width=${width} height=${height}></tap-icon-hourglass-fill>
  <tap-icon-image color=${color} width=${width} height=${height}></tap-icon-image>
  <tap-icon-image-fill color=${color} width=${width} height=${height}></tap-icon-image-fill>
  <tap-icon-image-two color=${color} width=${width} height=${height}></tap-icon-image-two>
  <tap-icon-image-two-fill color=${color} width=${width} height=${height}></tap-icon-image-two-fill>
  <tap-icon-info color=${color} width=${width} height=${height}></tap-icon-info>
  <tap-icon-info-fill color=${color} width=${width} height=${height}></tap-icon-info-fill>
  <tap-icon-keyboard color=${color} width=${width} height=${height}></tap-icon-keyboard>
  <tap-icon-keyboard-fill color=${color} width=${width} height=${height}></tap-icon-keyboard-fill>
  <tap-icon-lamp-spark-fill color=${color} width=${width} height=${height}></tap-icon-lamp-spark-fill>
  <tap-icon-line-three color=${color} width=${width} height=${height}></tap-icon-line-three>
  <tap-icon-line-three-horizontal-decrease color=${color} width=${width} height=${height}></tap-icon-line-three-horizontal-decrease>
  <tap-icon-list-bullet color=${color} width=${width} height=${height}></tap-icon-list-bullet>
  <tap-icon-loading color=${color} width=${width} height=${height}></tap-icon-loading>
  <tap-icon-location-left color=${color} width=${width} height=${height}></tap-icon-location-left>
  <tap-icon-location-up color=${color} width=${width} height=${height}></tap-icon-location-up>
  <tap-icon-lock color=${color} width=${width} height=${height}></tap-icon-lock>
  <tap-icon-lock-fill color=${color} width=${width} height=${height}></tap-icon-lock-fill>
  <tap-icon-lock-small color=${color} width=${width} height=${height}></tap-icon-lock-small>
  <tap-icon-lock-small-fill color=${color} width=${width} height=${height}></tap-icon-lock-small-fill>
  <tap-icon-magnifier color=${color} width=${width} height=${height}></tap-icon-magnifier>
  <tap-icon-magnifier-fill color=${color} width=${width} height=${height}></tap-icon-magnifier-fill>
  <tap-icon-map color=${color} width=${width} height=${height}></tap-icon-map>
  <tap-icon-map-fill color=${color} width=${width} height=${height}></tap-icon-map-fill>
  <tap-icon-medal color=${color} width=${width} height=${height}></tap-icon-medal>
  <tap-icon-medal-1 color=${color} width=${width} height=${height}></tap-icon-medal-1>
  <tap-icon-medal-fill color=${color} width=${width} height=${height}></tap-icon-medal-fill>
  <tap-icon-medal-fill-1 color=${color} width=${width} height=${height}></tap-icon-medal-fill-1>
  <tap-icon-microphone color=${color} width=${width} height=${height}></tap-icon-microphone>
  <tap-icon-microphone-fill color=${color} width=${width} height=${height}></tap-icon-microphone-fill>
  <tap-icon-microphone-slash color=${color} width=${width} height=${height}></tap-icon-microphone-slash>
  <tap-icon-microphone-slash-fill color=${color} width=${width} height=${height}></tap-icon-microphone-slash-fill>
  <tap-icon-microphone-spark color=${color} width=${width} height=${height}></tap-icon-microphone-spark>
  <tap-icon-microphone-spark-fill color=${color} width=${width} height=${height}></tap-icon-microphone-spark-fill>
  <tap-icon-minus color=${color} width=${width} height=${height}></tap-icon-minus>
  <tap-icon-minus-fill color=${color} width=${width} height=${height}></tap-icon-minus-fill>
  <tap-icon-moon color=${color} width=${width} height=${height}></tap-icon-moon>
  <tap-icon-moon-fill color=${color} width=${width} height=${height}></tap-icon-moon-fill>
  <tap-icon-more-horizontal color=${color} width=${width} height=${height}></tap-icon-more-horizontal>
  <tap-icon-more-horizontal-fill color=${color} width=${width} height=${height}></tap-icon-more-horizontal-fill>
  <tap-icon-more-vertical color=${color} width=${width} height=${height}></tap-icon-more-vertical>
  <tap-icon-more-vertical-fill color=${color} width=${width} height=${height}></tap-icon-more-vertical-fill>
  <tap-icon-motorcycle color=${color} width=${width} height=${height}></tap-icon-motorcycle>
  <tap-icon-pause color=${color} width=${width} height=${height}></tap-icon-pause>
  <tap-icon-pencil-line color=${color} width=${width} height=${height}></tap-icon-pencil-line>
  <tap-icon-pencil-line-fill color=${color} width=${width} height=${height}></tap-icon-pencil-line-fill>
  <tap-icon-person color=${color} width=${width} height=${height}></tap-icon-person>
  <tap-icon-person-1 color=${color} width=${width} height=${height}></tap-icon-person-1>
  <tap-icon-person-fill color=${color} width=${width} height=${height}></tap-icon-person-fill>
  <tap-icon-person-fill-1 color=${color} width=${width} height=${height}></tap-icon-person-fill-1>
  <tap-icon-person-in-wheelchair color=${color} width=${width} height=${height}></tap-icon-person-in-wheelchair>
  <tap-icon-person-minus color=${color} width=${width} height=${height}></tap-icon-person-minus>
  <tap-icon-person-minus-fill color=${color} width=${width} height=${height}></tap-icon-person-minus-fill>
  <tap-icon-person-plus color=${color} width=${width} height=${height}></tap-icon-person-plus>
  <tap-icon-person-plus-fill color=${color} width=${width} height=${height}></tap-icon-person-plus-fill>
  <tap-icon-person-two color=${color} width=${width} height=${height}></tap-icon-person-two>
  <tap-icon-person-two-fill color=${color} width=${width} height=${height}></tap-icon-person-two-fill>
  <tap-icon-person-wave color=${color} width=${width} height=${height}></tap-icon-person-wave>
  <tap-icon-person-wave-fill color=${color} width=${width} height=${height}></tap-icon-person-wave-fill>
  <tap-icon-phone color=${color} width=${width} height=${height}></tap-icon-phone>
  <tap-icon-phone-fill color=${color} width=${width} height=${height}></tap-icon-phone-fill>
  <tap-icon-phone-vibrate color=${color} width=${width} height=${height}></tap-icon-phone-vibrate>
  <tap-icon-phone-vibrate-fill color=${color} width=${width} height=${height}></tap-icon-phone-vibrate-fill>
  <tap-icon-pin color=${color} width=${width} height=${height}></tap-icon-pin>
  <tap-icon-pin-cross color=${color} width=${width} height=${height}></tap-icon-pin-cross>
  <tap-icon-pin-cross-fill color=${color} width=${width} height=${height}></tap-icon-pin-cross-fill>
  <tap-icon-pin-fill color=${color} width=${width} height=${height}></tap-icon-pin-fill>
  <tap-icon-pin-on-map color=${color} width=${width} height=${height}></tap-icon-pin-on-map>
  <tap-icon-pin-on-map-fill color=${color} width=${width} height=${height}></tap-icon-pin-on-map-fill>
  <tap-icon-pin-wave color=${color} width=${width} height=${height}></tap-icon-pin-wave>
  <tap-icon-pin-wave-fill color=${color} width=${width} height=${height}></tap-icon-pin-wave-fill>
  <tap-icon-plane color=${color} width=${width} height=${height}></tap-icon-plane>
  <tap-icon-plane-fill color=${color} width=${width} height=${height}></tap-icon-plane-fill>
  <tap-icon-planet-earth color=${color} width=${width} height=${height}></tap-icon-planet-earth>
  <tap-icon-play color=${color} width=${width} height=${height}></tap-icon-play>
  <tap-icon-plus color=${color} width=${width} height=${height}></tap-icon-plus>
  <tap-icon-plus-fill color=${color} width=${width} height=${height}></tap-icon-plus-fill>
  <tap-icon-point-three-connected-trianglepath-line color=${color} width=${width} height=${height}></tap-icon-point-three-connected-trianglepath-line>
  <tap-icon-point-three-connected-trianglepath-line-fill color=${color} width=${width} height=${height}></tap-icon-point-three-connected-trianglepath-line-fill>
  <tap-icon-power color=${color} width=${width} height=${height}></tap-icon-power>
  <tap-icon-question color=${color} width=${width} height=${height}></tap-icon-question>
  <tap-icon-record color=${color} width=${width} height=${height}></tap-icon-record>
  <tap-icon-rectangle-person-text color=${color} width=${width} height=${height}></tap-icon-rectangle-person-text>
  <tap-icon-rectangle-person-text-with-badge color=${color} width=${width} height=${height}></tap-icon-rectangle-person-text-with-badge>
  <tap-icon-send-chat color=${color} width=${width} height=${height}></tap-icon-send-chat>
  <tap-icon-send-chat-fill color=${color} width=${width} height=${height}></tap-icon-send-chat-fill>
  <tap-icon-share color=${color} width=${width} height=${height}></tap-icon-share>
  <tap-icon-share-fill color=${color} width=${width} height=${height}></tap-icon-share-fill>
  <tap-icon-shield-tick color=${color} width=${width} height=${height}></tap-icon-shield-tick>
  <tap-icon-shield-tick-fill color=${color} width=${width} height=${height}></tap-icon-shield-tick-fill>
  <tap-icon-shopping-bag color=${color} width=${width} height=${height}></tap-icon-shopping-bag>
  <tap-icon-shopping-bag-fill color=${color} width=${width} height=${height}></tap-icon-shopping-bag-fill>
  <tap-icon-shopping-cart color=${color} width=${width} height=${height}></tap-icon-shopping-cart>
  <tap-icon-shopping-cart-fill color=${color} width=${width} height=${height}></tap-icon-shopping-cart-fill>
  <tap-icon-single-check color=${color} width=${width} height=${height}></tap-icon-single-check>
  <tap-icon-siren color=${color} width=${width} height=${height}></tap-icon-siren>
  <tap-icon-siren-fill color=${color} width=${width} height=${height}></tap-icon-siren-fill>
  <tap-icon-slider-horizontal color=${color} width=${width} height=${height}></tap-icon-slider-horizontal>
  <tap-icon-slider-horizontal-fill color=${color} width=${width} height=${height}></tap-icon-slider-horizontal-fill>
  <tap-icon-spark color=${color} width=${width} height=${height}></tap-icon-spark>
  <tap-icon-spark-fill color=${color} width=${width} height=${height}></tap-icon-spark-fill>
  <tap-icon-spark-small color=${color} width=${width} height=${height}></tap-icon-spark-small>
  <tap-icon-spark-small-fill color=${color} width=${width} height=${height}></tap-icon-spark-small-fill>
  <tap-icon-spark-three color=${color} width=${width} height=${height}></tap-icon-spark-three>
  <tap-icon-spark-three-fill color=${color} width=${width} height=${height}></tap-icon-spark-three-fill>
  <tap-icon-speaker-cross color=${color} width=${width} height=${height}></tap-icon-speaker-cross>
  <tap-icon-speaker-exclamation color=${color} width=${width} height=${height}></tap-icon-speaker-exclamation>
  <tap-icon-speaker-wave color=${color} width=${width} height=${height}></tap-icon-speaker-wave>
  <tap-icon-spiral-dot-two color=${color} width=${width} height=${height}></tap-icon-spiral-dot-two>
  <tap-icon-square-above-squares color=${color} width=${width} height=${height}></tap-icon-square-above-squares>
  <tap-icon-square-fill color=${color} width=${width} height=${height}></tap-icon-square-fill>
  <tap-icon-square-fill-1 color=${color} width=${width} height=${height}></tap-icon-square-fill-1>
  <tap-icon-square-fill-2 color=${color} width=${width} height=${height}></tap-icon-square-fill-2>
  <tap-icon-square-fill-3 color=${color} width=${width} height=${height}></tap-icon-square-fill-3>
  <tap-icon-square-fill-4 color=${color} width=${width} height=${height}></tap-icon-square-fill-4>
  <tap-icon-square-fill-5 color=${color} width=${width} height=${height}></tap-icon-square-fill-5>
  <tap-icon-square-fill-6 color=${color} width=${width} height=${height}></tap-icon-square-fill-6>
  <tap-icon-square-fill-7 color=${color} width=${width} height=${height}></tap-icon-square-fill-7>
  <tap-icon-square-fill-8 color=${color} width=${width} height=${height}></tap-icon-square-fill-8>
  <tap-icon-square-fill-9 color=${color} width=${width} height=${height}></tap-icon-square-fill-9>
  <tap-icon-square-four color=${color} width=${width} height=${height}></tap-icon-square-four>
  <tap-icon-square-four-fill color=${color} width=${width} height=${height}></tap-icon-square-four-fill>
  <tap-icon-square-grid color=${color} width=${width} height=${height}></tap-icon-square-grid>
  <tap-icon-square-grid-fill color=${color} width=${width} height=${height}></tap-icon-square-grid-fill>
  <tap-icon-square-grid-rounded color=${color} width=${width} height=${height}></tap-icon-square-grid-rounded>
  <tap-icon-square-grid-rounded-fill color=${color} width=${width} height=${height}></tap-icon-square-grid-rounded-fill>
  <tap-icon-square-more color=${color} width=${width} height=${height}></tap-icon-square-more>
  <tap-icon-square-more-fill color=${color} width=${width} height=${height}></tap-icon-square-more-fill>
  <tap-icon-square-outline-1 color=${color} width=${width} height=${height}></tap-icon-square-outline-1>
  <tap-icon-square-outline-2 color=${color} width=${width} height=${height}></tap-icon-square-outline-2>
  <tap-icon-square-outline-3 color=${color} width=${width} height=${height}></tap-icon-square-outline-3>
  <tap-icon-square-outline-4 color=${color} width=${width} height=${height}></tap-icon-square-outline-4>
  <tap-icon-square-outline-5 color=${color} width=${width} height=${height}></tap-icon-square-outline-5>
  <tap-icon-square-outline-6 color=${color} width=${width} height=${height}></tap-icon-square-outline-6>
  <tap-icon-square-outline-7 color=${color} width=${width} height=${height}></tap-icon-square-outline-7>
  <tap-icon-square-outline-8 color=${color} width=${width} height=${height}></tap-icon-square-outline-8>
  <tap-icon-square-outline-9 color=${color} width=${width} height=${height}></tap-icon-square-outline-9>
  <tap-icon-square-person color=${color} width=${width} height=${height}></tap-icon-square-person>
  <tap-icon-square-person-fill color=${color} width=${width} height=${height}></tap-icon-square-person-fill>
  <tap-icon-star color=${color} width=${width} height=${height}></tap-icon-star>
  <tap-icon-star-fill color=${color} width=${width} height=${height}></tap-icon-star-fill>
  <tap-icon-steer color=${color} width=${width} height=${height}></tap-icon-steer>
  <tap-icon-steer-fill color=${color} width=${width} height=${height}></tap-icon-steer-fill>
  <tap-icon-sticky-note color=${color} width=${width} height=${height}></tap-icon-sticky-note>
  <tap-icon-sticky-note-fill color=${color} width=${width} height=${height}></tap-icon-sticky-note-fill>
  <tap-icon-store color=${color} width=${width} height=${height}></tap-icon-store>
  <tap-icon-store-fill color=${color} width=${width} height=${height}></tap-icon-store-fill>
  <tap-icon-sun color=${color} width=${width} height=${height}></tap-icon-sun>
  <tap-icon-sun-fill color=${color} width=${width} height=${height}></tap-icon-sun-fill>
  <tap-icon-tapsi-logo color=${color} width=${width} height=${height}></tap-icon-tapsi-logo>
  <tap-icon-target color=${color} width=${width} height=${height}></tap-icon-target>
  <tap-icon-target-fill color=${color} width=${width} height=${height}></tap-icon-target-fill>
  <tap-icon-target-slash color=${color} width=${width} height=${height}></tap-icon-target-slash>
  <tap-icon-telephone color=${color} width=${width} height=${height}></tap-icon-telephone>
  <tap-icon-telephone-fill color=${color} width=${width} height=${height}></tap-icon-telephone-fill>
  <tap-icon-thumb-down color=${color} width=${width} height=${height}></tap-icon-thumb-down>
  <tap-icon-thumb-down-fill color=${color} width=${width} height=${height}></tap-icon-thumb-down-fill>
  <tap-icon-thumb-up color=${color} width=${width} height=${height}></tap-icon-thumb-up>
  <tap-icon-thumb-up-fill color=${color} width=${width} height=${height}></tap-icon-thumb-up-fill>
  <tap-icon-timer color=${color} width=${width} height=${height}></tap-icon-timer>
  <tap-icon-timer-fill color=${color} width=${width} height=${height}></tap-icon-timer-fill>
  <tap-icon-traffic-light color=${color} width=${width} height=${height}></tap-icon-traffic-light>
  <tap-icon-traffic-light-fill color=${color} width=${width} height=${height}></tap-icon-traffic-light-fill>
  <tap-icon-trash color=${color} width=${width} height=${height}></tap-icon-trash>
  <tap-icon-trash-fill color=${color} width=${width} height=${height}></tap-icon-trash-fill>
  <tap-icon-triangle-exclamation color=${color} width=${width} height=${height}></tap-icon-triangle-exclamation>
  <tap-icon-triangle-exclamation-fill color=${color} width=${width} height=${height}></tap-icon-triangle-exclamation-fill>
  <tap-icon-ufo color=${color} width=${width} height=${height}></tap-icon-ufo>
  <tap-icon-ufo-fill color=${color} width=${width} height=${height}></tap-icon-ufo-fill>
  <tap-icon-video-two color=${color} width=${width} height=${height}></tap-icon-video-two>
  <tap-icon-video-two-fill color=${color} width=${width} height=${height}></tap-icon-video-two-fill>
  <tap-icon-wallet color=${color} width=${width} height=${height}></tap-icon-wallet>
  <tap-icon-wallet-fill color=${color} width=${width} height=${height}></tap-icon-wallet-fill>
  <tap-icon-wallet-swap color=${color} width=${width} height=${height}></tap-icon-wallet-swap>
  <tap-icon-wifi color=${color} width=${width} height=${height}></tap-icon-wifi>
  <tap-icon-wifi-slash color=${color} width=${width} height=${height}></tap-icon-wifi-slash>

  </div>`;

export const IconSet = IconSetTemplate.bind({});

IconSet.args = { height: 24, width: 24, color: 'black' };
