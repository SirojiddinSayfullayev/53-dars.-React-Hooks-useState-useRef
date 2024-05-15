import React from "react";

function Footer(props) {
  const { data } = props;

  return (
    <div>
      <ul>
        <li>
          <a href={`tel:${data.contact}`}>{data.contact}</a>
        </li>
        <li>
          <a href={`${data.email}`}>{data.email}</a>
        </li>
        <li>
          <iframe
            src={data.adress}
            width="600"
            height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
