import {html} from "lit";
import {TapIcon} from "../../icon";

export class SteerIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_24_776)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM15 11H9V14.171C9.55657 14.368 10.0427 14.7248 10.3975 15.1967C10.7524 15.6686 10.9602 16.2346 10.995 16.824L11 17V19.938C11.6644 20.0209 12.3366 20.0209 13.001 19.938L13 17C13 15.694 13.835 14.582 15 14.17V11ZM8 16L5.07 16.001C5.96403 17.545 7.34678 18.7472 9 19.418V17C8.99997 16.7551 8.91004 16.5187 8.74728 16.3356C8.58453 16.1526 8.36025 16.0357 8.117 16.007L8 16ZM16 16C15.7551 16 15.5187 16.09 15.3356 16.2527C15.1526 16.4155 15.0357 16.6397 15.007 16.883L15 17L15.001 19.418C16.5545 18.787 17.8714 17.6855 18.767 16.268L18.929 16.001L16 16ZM7 11H4.062C4.032 11.247 4.012 11.497 4.004 11.75L4 12C4 12.69 4.088 13.361 4.252 14H7V11ZM19.938 11H17V14H19.748C19.8951 13.4276 19.9782 12.8407 19.996 12.25L20 12C20 11.774 19.99 11.55 19.972 11.33L19.938 11ZM12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12ZM12 4C10.4062 4.00004 8.84875 4.47596 7.52715 5.36676C6.20556 6.25756 5.18004 7.52268 4.582 9H19.418C18.82 7.52268 17.7944 6.25756 16.4728 5.36676C15.1513 4.47596 13.5938 4.00004 12 4Z" fill="currentColor"/></g><defs><clipPath id="clip0_24_776"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`);
  }
}