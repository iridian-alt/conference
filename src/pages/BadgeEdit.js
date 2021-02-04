import React from 'react';
import Swal from 'sweetalert';

import './styles/BadgeEdit.css';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';

import api from '../api';

import header from '../images/icons8-pixel-star-40.png';

class BadgeEdit extends React.Component {
    state = {
        loading: true,
        error: null,
        form: {
            firstName : '',
            lastName: '',
            jobTitle: '',
            email: '',
            twitter: '',
        }
    };

    componentDidMount() {
        this.fetchData()
    };

    fetchData = async (e) => {
        this.setState({ loading: true, error: null })

        try {
                const data = await api.badges.read(this.props.match.params.badgeId)

                this.setState({loading: false, form: data })
        } catch (error) {
                this.setState({loading: false, error: error})
        }
    };

    hadleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    };


    alertData(faltantes) {
        Swal({
            title: 'Alto ahi!',
            text: `Te faltan campos por rellenar 🧐\n ${faltantes}`,
            icon: 'error'
        });
    }

    alertError(){
        Swal({
            title: 'Opps!',
            text: `Ha ocurrido algo inesperado 😅, vuelve a intentarlo nuevamente`,
            icon: 'error'
        });

        // Controlar cuando sea un error 500 para que mande un mensaje que los server estan caidos o algo
    }

    alertSuccess() {
        Swal({
            title: 'Creacion Exitosa!',
            text: 'Muchas gracias por inscribirte en la conferencia 😊',
            icon: 'success'
        }).then((result) => {
            if (result.value || !result.value) {
                this.props.history.push('/badges');
            }
        });
    }

    // Capturar el evento del envio de datos
    handleSubmit = async e => {
        e.preventDefault();
        const valuesFilter = Object.keys(this.state.form).filter((value) => {
            return (this.state.form[value]==="")
        })
        if(valuesFilter.length !== 0){
            this.alertData(valuesFilter)
        }else{
            this.setState({ loading: true, error: null });
            try {
              await api.badges.update(this.props.match.params.badgeId, this.state.form);
              this.setState({ loading: false });
              this.alertSuccess()
            } catch (error) {
              this.setState({ loading: false, error: error });
              this.alertError()
            }
        }
    };



    render () {
        if(this.state.loading) {
            return <PageLoading />
        }
        return(
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt="logo" />
                </div>

                <div className="container">
                    <div className="row" >
                        <div className="col-12 col-md-6" >
                            <Badge
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE' }
                                email={this.state.form.email || 'email@example.com '}
                                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                                twitter={this.state.form.twitter || 'twitter' }
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <h1>Edit Attendant</h1>
                            <BadgeForm
                                onChange={this.hadleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                             />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default BadgeEdit;