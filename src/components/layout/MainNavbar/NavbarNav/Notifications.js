import React from "react";
import { NavItem, NavLink,  Collapse, DropdownItem } from "shards-react";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleNotifications = this.toggleNotifications.bind(this);
  }

  toggleNotifications() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <NavItem  style ={{display:"flex",marginTop:"1.5rem",marginLeft: window.innerWidth<768?"-13px":null}}className="border-right dropdown notifications">
        <NavLink
          className="nav-link-icon text-center"
          onClick={this.toggleNotifications}
        >
          <div className="nav-link-icon__wrapper">
          <svg className="setting" width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.3044 24.1812L32.8224 22.138C33.2624 20.0691 33.2624 17.9309 32.8224 15.862L35.3044 13.8188C35.5907 13.5843 35.7841 13.2555 35.85 12.8913C35.916 12.5272 35.8501 12.1514 35.6642 11.8314L33.1164 7.41868C32.9322 7.09761 32.6397 6.85262 32.2913 6.72764C31.9429 6.60266 31.5614 6.60586 31.2151 6.73665L28.2025 7.86532C26.6332 6.44741 24.7817 5.37734 22.7697 4.72532L22.2411 1.55571C22.1813 1.19042 21.9933 0.858389 21.7109 0.619122C21.4284 0.379856 21.07 0.248999 20.6999 0.250006H15.6044C15.2343 0.249012 14.8759 0.379863 14.5934 0.619111C14.311 0.85836 14.123 1.19037 14.0632 1.55563L13.5349 4.72532C11.5228 5.37732 9.67141 6.44739 8.10206 7.86532L5.08917 6.73649C4.74291 6.60579 4.36143 6.60265 4.01308 6.72764C3.66472 6.85263 3.37225 7.09758 3.18807 7.4186L0.64034 11.8316C0.454529 12.1517 0.388727 12.5274 0.454719 12.8916C0.520712 13.2557 0.714188 13.5845 1.0005 13.819L3.48229 15.862C3.04229 17.9309 3.04229 20.0691 3.48229 22.138L1.00026 24.1812C0.713999 24.4157 0.520576 24.7445 0.454628 25.1087C0.388679 25.4728 0.454513 25.8486 0.64034 26.1686L3.18815 30.5813C3.37235 30.9024 3.66486 31.1474 4.01327 31.2723C4.36168 31.3973 4.74321 31.3941 5.08948 31.2634L8.10214 30.1347C9.67149 31.5526 11.5229 32.6227 13.5349 33.2747L14.0632 36.4443C14.1231 36.8096 14.3111 37.1416 14.5935 37.3808C14.8759 37.6201 15.2343 37.751 15.6044 37.75H20.6999C21.07 37.751 21.4284 37.6202 21.7108 37.3809C21.9933 37.1417 22.1813 36.8097 22.2411 36.4444L22.7695 33.2747C24.7815 32.6227 26.6329 31.5526 28.2023 30.1347L31.2151 31.2635C31.5614 31.3942 31.9428 31.3973 32.2912 31.2724C32.6395 31.1474 32.932 30.9024 33.1162 30.5814L35.6638 26.1684C35.8496 25.8484 35.9156 25.4728 35.8497 25.1086C35.7839 24.7445 35.5906 24.4158 35.3044 24.1812ZM31.3485 28.6437L27.5899 27.2356L27.0208 27.8085C25.4549 29.3868 23.4963 30.5188 21.347 31.0877L20.5657 31.2936L19.906 35.25H16.3989L15.7394 31.2936L14.9582 31.0877C12.8088 30.5188 10.8502 29.3868 9.28432 27.8085L8.71518 27.2356L4.95604 28.6437L3.20284 25.6064L6.29885 23.0577L6.08792 22.2785C5.50782 20.1313 5.50782 17.8687 6.08792 15.7215L6.29885 14.9424L3.20284 12.3937L4.95643 9.35633L8.71495 10.7645L9.28409 10.1915C10.85 8.61318 12.8086 7.48121 14.9579 6.91235L15.7392 6.70641L16.3986 2.75001H19.906L20.5655 6.70641L21.3467 6.91235C23.496 7.48121 25.4547 8.61318 27.0206 10.1915L27.5897 10.7645L31.3482 9.35633L33.1019 12.3936L30.0059 14.9424L30.2168 15.7215C30.7969 17.8687 30.7969 20.1313 30.2168 22.2785L30.0059 23.0577L33.1019 25.6063L31.3485 28.6437Z" fill="black"/>
</svg>
<svg className="dot-set" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.15235 0.125C5.7926 0.125 4.46339 0.528212 3.3328 1.28365C2.20221 2.03908 1.32103 3.11281 0.800675 4.36905C0.280323 5.62529 0.144175 7.00763 0.409448 8.34125C0.674721 9.67486 1.3295 10.8999 2.29099 11.8614C3.25247 12.8228 4.47748 13.4776 5.8111 13.7429C7.14472 14.0082 8.52705 13.872 9.7833 13.3517C11.0395 12.8313 12.1133 11.9501 12.8687 10.8195C13.6241 9.68896 14.0273 8.35975 14.0273 7C14.0253 5.17727 13.3003 3.42979 12.0114 2.14092C10.7226 0.85206 8.97508 0.127068 7.15235 0.125ZM7.15235 11.375C6.28705 11.375 5.44119 11.1184 4.72173 10.6377C4.00226 10.1569 3.44151 9.47367 3.11037 8.67424C2.77924 7.87481 2.6926 6.99515 2.86141 6.14648C3.03022 5.29781 3.4469 4.51826 4.05876 3.90641C4.67061 3.29455 5.45016 2.87787 6.29883 2.70906C7.14749 2.54025 8.02716 2.62689 8.82659 2.95803C9.62601 3.28916 10.3093 3.84991 10.79 4.56938C11.2708 5.28885 11.5273 6.13471 11.5273 7C11.526 8.15992 11.0647 9.27196 10.2445 10.0922C9.42431 10.9123 8.31227 11.3737 7.15235 11.375Z" fill="black"/>
</svg>


          </div>
        </NavLink>
        <NavLink
          className="nav-link-icon text-center"
          onClick={this.toggleNotifications}
        >
          <svg className="bell-n" width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.1769 25.232L27.7652 18.9332V12.375C27.7652 5.82711 22.4381 0.5 15.8902 0.5C9.34232 0.5 4.01521 5.82711 4.01521 12.375V18.9332L0.603332 25.2319C0.448607 25.5175 0.370733 25.8384 0.377341 26.1631C0.38395 26.4879 0.474814 26.8054 0.64103 27.0845C0.807245 27.3635 1.04311 27.5946 1.32552 27.7551C1.60792 27.9156 1.92718 28 2.252 28H9.0438C9.02486 28.2078 9.01529 28.4163 9.01513 28.625C9.01513 30.4484 9.73946 32.197 11.0288 33.4864C12.3181 34.7757 14.0668 35.5 15.8901 35.5C17.7135 35.5 19.4622 34.7757 20.7515 33.4864C22.0408 32.197 22.7651 30.4484 22.7651 28.625C22.7651 28.4141 22.755 28.2059 22.7365 28H29.5283C29.853 28 30.1723 27.9156 30.4546 27.755C30.737 27.5945 30.9728 27.3634 31.139 27.0844C31.3052 26.8053 31.396 26.4879 31.4026 26.1631C31.4092 25.8384 31.3314 25.5175 31.1767 25.232H31.1769ZM20.2652 28.625C20.2657 29.2262 20.1423 29.8211 19.9026 30.3725C19.6629 30.9239 19.3122 31.42 18.8723 31.8298C18.4323 32.2396 17.9127 32.5543 17.3457 32.7544C16.7787 32.9544 16.1766 33.0354 15.5769 32.9923C14.9772 32.9493 14.3928 32.7831 13.8602 32.5041C13.3276 32.2251 12.8583 31.8394 12.4814 31.3709C12.1045 30.9025 11.8283 30.3614 11.6698 29.7814C11.5114 29.2014 11.4742 28.595 11.5606 28H20.2197C20.2498 28.207 20.265 28.4158 20.2652 28.625ZM3.3013 25.5L6.51521 19.5668V12.375C6.51521 9.8886 7.50293 7.50403 9.26108 5.74587C11.0192 3.98772 13.4038 3 15.8902 3C18.3766 3 20.7612 3.98772 22.5193 5.74587C24.2775 7.50403 25.2652 9.8886 25.2652 12.375V19.5668L28.479 25.5H3.3013Z" fill="black"/>
</svg>

        </NavLink>
        <Collapse
          open={this.state.visible}
          className="dropdown-menu dropdown-menu-small"
        >
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="material-icons">&#xE6E1;</i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category">Analytics</span>
              <p>
                Your website’s active users count increased by{" "}
                <span className="text-success text-semibold">28%</span> in the
                last week. Great job!
              </p>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="material-icons">&#xE8D1;</i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category">Sales</span>
              <p>
                Last week your store’s sales count decreased by{" "}
                <span className="text-danger text-semibold">5.52%</span>. It
                could have been worse!
              </p>
            </div>
          </DropdownItem>
          <DropdownItem className="notification__all text-center">
            View all Notifications
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
