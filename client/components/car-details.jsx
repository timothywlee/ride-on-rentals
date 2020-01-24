import React from 'react';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { car: null };
    this.getDetails = this.getDetails.bind(this);
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails() {
    const { id } = this.props.match.params;
    fetch(`/api/cars/${id}`)
      .then(res => res.json())
      .then(car => this.setState({ car }))
      .catch(err => console.error(err));
  }

  render() {
    const { car } = this.state;
    return !car
      ? <div>Loading...</div>
      : <div className="container">

        <div className="card p-2">
          <img src={car.image}
            style={{
              objectFit: 'cover',
              height: '15em'
            }}/>
          <div className="card-body">
            <div className="row">
              <h6 className="card-title col-6">
                {car.make}
              </h6>
              <h6 className="card-title text-right col-6">
                {car.status}
              </h6>
            </div>
            <div className="card-text">
              {car.shortDescription}
            </div>
            <div className="card-text">
              Top Speed: {car.topSpeed} mph
            </div>
            <div className="card-text">
              Horse Power: {car.horsePower} BHP
            </div>
            <div className="card-text">
              Rate: ${car.rate} / day
            </div>
          </div>
        </div>
      </div>;
  }
}

export default Details;
