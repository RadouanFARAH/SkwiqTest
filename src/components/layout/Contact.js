import React, { Component } from 'react'
import Logo from '../../Images/logochaabane.png'
import './Contact.css'
import background from '../../Images/background.jpg'

export class Contact extends Component {
    render() {
        return (
        <div id="contact-section" style={ {backgroundImage: `url(${background})`}}>
            <div id="logo-sec">
                <img id="image" src={Logo} alt="" />
            </div>
            <div id="form-sec" style={{backgroundColor:'white'}}>
                <form>
                <p>Pour être rappelé par un de nos conseillers, veuillez renseigner les champs suivants :</p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">M.</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">Mme.</label>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" id="nom" placeholder="Nom" />
                    </div><div class="form-group col-md-6">
                        <input type="text" class="form-control" id="prenom" placeholder="Prenom"/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <select id="inputCountry" class="form-control">
                            <option selected>Morocco</option>
                            <option>Other Countries</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2">
                        <input type="text" class="form-control" id="inputPhoneCode" placeholder="+212"/>
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" id="inputPhone" placeholder="Tel*" required/>
                    </div>
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="email@exemple.com"/>
                </div>
                <div class="form-group">
                    <select id="inputCountry" class="form-control" required>
                        <option selected >Veuillezchoisir votre projet*</option>
                        <option>Projects</option>
                    </select>
                </div>
                <div class="form-group">
                    <select id="inputCountry" class="form-control" required>
                        <option selected>Comment vous nous avez connus ?*</option>
                        <option>Par Social Media</option>
                        <option>Par L'ecole</option>
                    </select>
                </div>
                <div class="mb-3">
                    <textarea class="form-control" id="validationTextarea" placeholder="message"></textarea>
                </div>
                <div id="btn">
                    <div></div>
                    <button type="submit" class="btn btn-primary">Envoyer</button>
                </div>
                <br/>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">J'ai lu et j'accepte les conditions générales d'utilisation notamment la mention relative a la protection des données personnelles.</label>
                </div>
                <p>Conformément à la loi 09-08, vous disposez d'un droit d'accès, de rectification et d'opposition au traitement de vos données personnelles. Ce traitement a été notifié à la CNDP au titre du récépissé n°...</p>
            </form>
            </div>
        </div>
        )
    }
}

export default Contact
