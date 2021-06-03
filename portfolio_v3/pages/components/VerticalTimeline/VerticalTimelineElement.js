import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

const VerticalTimelineElement = ({
  children,
  className,
  contentArrowStyle,
  contentStyle,
  date,
  dateClassName,
  icon,
  iconClassName,
  iconOnClick,
  onTimelineElementClick,
  iconStyle,
  id,
  position,
  style,
  textClassName,
  visibilitySensorProps,
}) => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    triggerOnce: true,
  });

  return (
    <div
      id={id}
      className={classNames(className, "vertical-timeline-element", {
        "vertical-timeline-element--left": position === "left",
        "vertical-timeline-element--right": position === "right",
        "vertical-timeline-element--no-children": children === "",
      })}
      style={style}
    >
      <div ref={ref}>
        <React.Fragment>
          <span // eslint-disable-line jsx-a11y/no-static-element-interactions
            style={iconStyle}
            onClick={iconOnClick}
            className={classNames(
              iconClassName,
              "vertical-timeline-element-icon",
              {
                "bounce-in": inView,
                "is-hidden": !inView,
              }
            )}
          >
            {icon}
          </span>
          <div
            style={contentStyle}
            onClick={onTimelineElementClick}
            className={classNames(
              textClassName,
              "vertical-timeline-element-content",
              {
                "bounce-in": inView,
                "is-hidden": !inView,
              }
            )}
          >
            <div
              style={contentArrowStyle}
              className="vertical-timeline-element-content-arrow"
            />
            {children}
            <span
              className={classNames(
                dateClassName,
                "vertical-timeline-element-date"
              )}
            >
              {date}
            </span>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
};

VerticalTimelineElement.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  contentArrowStyle: PropTypes.shape({}),
  contentStyle: PropTypes.shape({}),
  date: PropTypes.node,
  dateClassName: PropTypes.string,
  icon: PropTypes.element,
  iconClassName: PropTypes.string,
  iconStyle: PropTypes.shape({}),
  iconOnClick: PropTypes.func,
  onTimelineElementClick: PropTypes.func,
  id: PropTypes.string,
  position: PropTypes.string,
  style: PropTypes.shape({}),
  textClassName: PropTypes.string,
  visibilitySensorProps: PropTypes.shape({
    onChange: PropTypes.func,
    partialVisibility: PropTypes.bool,
    offset: PropTypes.shape({}),
  }),
};

VerticalTimelineElement.defaultProps = {
  children: "",
  className: "",
  contentArrowStyle: null,
  contentStyle: null,
  icon: null,
  iconClassName: "",
  iconOnClick: null,
  onTimelineElementClick: null,
  iconStyle: null,
  id: "",
  style: null,
  date: "",
  position: "",
  textClassName: "",
  visibilitySensorProps: { partialVisibility: true, offset: { bottom: 40 } },
};

export default VerticalTimelineElement;
