import React from "react";
class AboutUsClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      counter: 0,
    };
  }

  render() {
    const { businessName } = this.props;
    return (
      <section className="about-wrapper">
        <div className="description">
          <h2 className="description-heading"> About Us </h2>
          <p className="description-description">
            Welcome to {businessName || ""}, your go-to destination for
            delicious meals delivered straight to your door. Whether you're
            craving a quick bite or planning a special dinner, we've got you
            covered with a wide range of cuisines and restaurant options.
          </p>
        </div>
        <div className="description">
          <h2 className="description-heading"> Ous Story </h2>
          <p className="description-description">
            Founded in 2024,{businessName || ""} was born out of a passion for
            food and a desire to make it accessible to everyone, everywhere. We
            believe that great food should be a part of every day, not just
            special occasions. Our journey began with a simple mission: to bring
            the best local restaurants and their culinary delights right to your
            fingertips.
          </p>
        </div>
        <div className="description">
          <h2 className="description-heading"> What We Do </h2>
          <p className="description-description">
            At {businessName || ""}, we partner with the finest restaurants in
            your area to offer a diverse menu that caters to all tastes and
            dietary preferences. From classic comfort foods to exotic
            delicacies, our extensive selection ensures there's something for
            everyone. Our easy-to-use app allows you to browse menus, read
            reviews, and place your order in just a few taps.
          </p>
        </div>
      </section>
    );
  }
}

export default AboutUsClass;
