import React from "react";
import FooterNav from "../FooterNav/FooterNav";
import "./Events.scss";

export default function Events(props) {
  return (
    <>
      <section className="events">
        <div className="events__banner-container">
          <img
            className="events__banner"
            src={props.artistInfo.strArtistBanner}
            alt="main-banner"
          />
        </div>
        <h1 className="events__header">EVENTS</h1>
        <h2 className="events__noData">{props.noData}</h2>
        <div className="events__container">
          <div className="events__flex-one">
            <h3 className="events__title-header events__font">Start Date:</h3>

            {props.event.map((date) => {
              const getFormattedDate = (dateStr) => {
                const date = new Date(dateStr);
                return date.toLocaleDateString();
              };
              return (
                <li className="events__item">
                  {getFormattedDate(date.dates.start.dateTime)}
                </li>
              );
            })}

            <h4 className="events__title-header events__font">Price Range:</h4>
            {props.event.map((price) => {
              if (!props.event[0].priceRange) {
                return (
                  <h4 className="events__title events__title__cancelled">
                    Currency Not Available - Cancelled
                  </h4>
                );
              }
              return (
                <li className="events__item">
                  {price.priceRanges[0].currency}
                </li>
              );
            })}
            {props.event.map((range) => {
              if (!props.event[0].priceRange) {
                return (
                  <h4 className="events__title events__title__cancelled">
                    Pricing Not Available - Cancelled
                  </h4>
                );
              } else {
                return (
                  <li className="events__item">
                    ${range.priceRanges[0].min}
                    <span> - ${range.priceRanges[0].max}</span>
                  </li>
                );
              }
            })}
            <h5 className="events__title-header events__font">Venue:</h5>
            {props.event.map((venue) => {
              return (
                <li className="events__item">
                  {venue._embedded.venues[0].name}
                </li>
              );
            })}
            <h6 className="events__title-header events__font">Promoter:</h6>
            {props.event.map((promoter) => {
              return <li className="events__item">{promoter.promoter.name}</li>;
            })}
            <h6 className="events__title-header events__font">Tickets:</h6>
            {props.event.map((tickets) => {
              if (!props.event[0].priceRange) {
                return (
                  <button className="events__item-tickets" disabled>
                    Not Available
                  </button>
                );
              }
              return (
                <button
                  onClick={() => {
                    window.open(tickets.url, "_blank");
                  }}
                  className="events__item-tickets"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Tickets
                </button>
              );
            })}
          </div>
          <div className="events__flex-two">
            <div className="events__photo-container">
              <img
                className="events__photo"
                src={props.event.map((item) => {
                  return item.images[7].url;
                })}
                alt="event"
              />
              ;
            </div>
          </div>
        </div>
      </section>
      <footer className="results__footer-nav">
        <FooterNav />
      </footer>
    </>
  );
}
