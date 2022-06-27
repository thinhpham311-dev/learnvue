<template>
    <div>
        <div class="container">
            <form class="form-register" v-on:submit.prevent="onSubmit">
                <div class="card">
                    <div class="card-header">
                        <label class="fw-bold">Parent's Information</label>
                        <i></i>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                                <label class="fw-bold" style="height: 50px;">
                                    1. Father/Guardian
                                </label>
                                <div class="col-12">
                                    <div class="form-group">

                                        <label>
                                            Family Name <span class="mark">*</span>
                                        </label>
                                        <input type="text" class="form-control" placeholder="eg: Waston" />
                                    </div>
                                    <div class="form-group">

                                        <label>
                                            First Name <span class="mark">*</span>
                                        </label>
                                        <input type="text" class="form-control" placeholder="eg: John" />
                                    </div>
                                    <div class="form-group">

                                        <label>
                                            Mobile Phone (+65) <span class="mark">*</span>
                                        </label>
                                        <input type="text" class="form-control" placeholder="eg: 9876 5883" />
                                    </div>
                                    <div class="form-group">

                                        <label>
                                            Office Phone (+65)
                                        </label>
                                        <input type="text" class="form-control"
                                            placeholder="eg: 6273 8885 / 9876 5484" />
                                    </div>
                                    <div class="form-group">

                                        <label>
                                            Email Address <span class="mark">*</span>
                                        </label>
                                        <input type="text" class="form-control" placeholder="eg: example@gmail.com" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                                <label class="fw-bold" style="height: 50px;">
                                    2. Mother/Guardian

                                </label>
                                <div class="col-12">
                                    <div class="form-group">

                                        <label>
                                            Family Name <span class="mark">*</span>
                                        </label>
                                        <input type="text" class="form-control" placeholder="eg: Waston" />
                                    </div>
                                    <div class="form-group">

                                        <label>
                                            First Name <span class="mark">*</span>
                                        </label>
                                        <input type="text" class="form-control" placeholder="eg: John" />
                                    </div>
                                    <div class="form-group">

                                        <label>
                                            Mobile Phone (+65) <span class="mark">*</span>
                                        </label>
                                        <input type="text" class="form-control" placeholder="eg: 9876 5883" />
                                    </div>
                                    <div class="form-group">

                                        <label>
                                            Office Phone (+65)
                                        </label>
                                        <input type="text" class="form-control"
                                            placeholder="eg: 6273 8885 / 9876 5484" />
                                    </div>
                                    <div class="form-group">

                                        <label>
                                            Email Address <span class="mark">*</span>
                                        </label>
                                        <input type="text" class="form-control" placeholder="eg: example@gmail.com" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                                <label class="fw-bold" style="height: 50px;">
                                    3. Authorized Person (for Afternoon pick ups, if necessary)
                                </label>
                                <div class="col-12">
                                    <div class="form-group">

                                        <label>
                                            Family Name <span class="mark">*</span>
                                        </label>
                                        <input type="text" class="form-control" placeholder="eg: Waston" />
                                    </div>
                                    <div class="form-group">

                                        <label>
                                            First Name <span class="mark">*</span>
                                        </label>
                                        <input type="text" class="form-control" placeholder="eg: John" />
                                    </div>
                                    <div class="form-group">

                                        <label>
                                            Mobile Phone (+65) <span class="mark">*</span>
                                        </label>
                                        <input type="text" class="form-control" placeholder="eg: 9876 5883" />
                                    </div>
                                    <div class="form-group">

                                        <label>
                                            Office Phone (+65)
                                        </label>
                                        <input type="text" class="form-control"
                                            placeholder="eg: 6273 8885 / 9876 5484" />
                                    </div>
                                    <div class="form-group">

                                        <label>
                                            Email Address <span class="mark">*</span>
                                        </label>
                                        <input type="text" class="form-control" placeholder="eg: example@gmail.com" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 py-4">
                                <p class="fw-bold text-center">
                                    Please indicate the first point of contact for all matters, include emergencies:

                                </p>
                                <section class="text-center">
                                    <label class="fw-bold mx-2">
                                        <input name="person" type="radio" class="mx-2" id="person" v-model="person_v1"
                                            value="father" checked>Father
                                    </label>
                                    <label class="fw-bold mx-2">
                                        <input name="person" type="radio" class="mx-2" id="person" v-model="person_v1"
                                            value="mother">Mother
                                    </label>
                                    <label class="fw-bold mx-2">
                                        <input name="person" type="radio" class="mx-2" id="person" v-model="person_v1"
                                            value="guardian">Guardian
                                    </label>
                                </section>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <label class="fw-bold"> Pick up/ Drop off Address (for Shuttle service riders, this will be your
                            billing address)</label>
                        <i></i>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-3">
                                <div class="col-12 form-group">
                                    <label for="">Block/ House Number <span class="text-danger">*</span></label>
                                    <input type="text" name="number-hourse" class="form-control" />
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="col-12 form-group">
                                    <label for="">Street Name <span class="text-danger">*</span></label>
                                    <input type="text" name="street-name" class="form-control" />
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="col-12 form-group">
                                    <label for="">Postal Code <span class="text-danger">*</span></label>
                                    <input type="number" name="postal-code" class="form-control" min="0" />
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="col-12 form-group">
                                    <label for="">Unit Number</label>
                                    <input type="number" name="unit-name" class="form-control" min="0" />
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="col-12 form-group">
                                    <label for="">Name of Building / Condominium</label>
                                    <input type="text" name="name-building" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <label class="fw-bold">Billing Address</label>
                        <i></i>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4">

                                <input type="checkbox" class="form-check" />
                            </div>
                            <div class="col-5">

                                <label for="">Please tick the appropriate box regarding payment:</label>
                            </div>
                        </div>
                        <section class="text-center">
                            <label class="fw-bold mx-2">
                                <input name="paymentCheck" type="radio" class="mx-2" v-model="paymentCheck"
                                    value="father" checked>Father
                            </label>
                            <label class="fw-bold mx-2">
                                <input name="paymentCheck" type="radio" class="mx-2" v-model="paymentCheck"
                                    value="mother">Mother
                            </label>
                            <label class="fw-bold mx-2">
                                <input name="paymentCheck" type="radio" class="mx-2" v-model="paymentCheck"
                                    value="details-below">Details below
                            </label>

                        </section>
                        <div class="row">
                            <div class="col-6">
                                <div class="col-12 form-group">
                                    <label for="">Name of Company <span class="text-danger">*</span></label>
                                    <input type="text" name="name-company"
                                        :disabled="paymentCheck === 'details-below' ? disabled : ''"
                                        class="form-control" />
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="col-12 form-group">
                                    <label for="">Attention to <span class="text-danger">*</span></label>
                                    <input type="text" name="name-company"
                                        :disabled="paymentCheck === 'details-below' ? disabled : ''"
                                        class="form-control" />
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="col-12 form-group">
                                    <label for="">Billing Address <span class="text-danger">*</span></label>
                                    <input type="text" name="name-company"
                                        :disabled="paymentCheck === 'details-below' ? disabled : ''"
                                        class="form-control" />
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="col-12 form-group">
                                    <label for="">Email Address <span class="text-danger">*</span></label>
                                    <input type="text" name="name-company"
                                        :disabled="paymentCheck === 'details-below' ? disabled : ''"
                                        class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <label class="fw-bold">Child/Children's Information</label>
                        <i></i>
                    </div>

                    <div v-for="(child, index) in arrchildall" :key="child.id_child" class="card-body row">
                        <div class="col-12 d-flex justify-content-between" :id="child[1]">
                            <label> {{ index + 1 }}. child</label>
                            <button type="button"
                                :class="[arrchildall.length === 1 ? 'hidden' : '', 'btn', 'btn-danger'] "
                                @click="RemoveChildren(index)">Xóa</button>
                        </div>
                        <div class="col-8">
                            <div class="form-group">
                                <label for="">Family name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="name-company" placeholder="eg. Waston" />
                            </div>
                            <div class="form-group">
                                <label for="">Given name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="name-company" placeholder="eg. Waston" />
                            </div>
                            <div class="form-group">
                                <label for="">Date of Birth <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="name-company" placeholder="eg. Waston" />
                            </div>
                            <div class="form-group">
                                <label for="">Student ID <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="name-company" placeholder="eg. Waston" />
                            </div>
                            <div class="form-group">
                                <label for="">Grade <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="name-company" placeholder="eg. Waston" />
                            </div>
                            <div class="form-group">
                                <label for="" class="fw-bold">Start date of service</label>
                                <select class="form-control">
                                    <option>First day of semester</option>
                                    <option>Choose date</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="" class="fw-bold">For Regular Bus Service:</label>
                                <div class="mx-2 routes">
                                    <label for="" class="fw-bold">Route <span class="text-danger">*</span></label>
                                    <label><input type="radio" />2 Ways</label>
                                    <label><input type="radio" />1 Ways (AM)</label>
                                    <label><input type="radio" />1 Ways (PM)</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="fw-bold">For Cairnhill 9 Shuttle Service (Shuttle bus fees
                                    apply):</label>
                                <div class="mx-2 routes">
                                    <label for="" class="fw-bold">Route <span class="text-danger">*</span></label>
                                    <label><input type="radio" />2 Ways</label>
                                    <label><input type="radio" />1 Ways (AM)</label>
                                    <label><input type="radio" />1 Ways (PM)</label>
                                </div>
                            </div>
                            <p>Remarks: Invoice will be sent to parents once bus seat can be confirmed. Transport
                                charges are paid twice a year, before the start of each semester.

                            </p>

                            <label class="fw-bold">
                                Shuttle Services:
                            </label>
                            <div class="form-group col-12">
                                <table class="shuttle-table">
                                    <thead>
                                        <tr>
                                            <th class="text-center">Shuttle Services</th>
                                            <th class="text-center">Estimated Departure Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Morning<br />
                                                From Cairnhill 9</td>
                                            <td>8:00 am</td>
                                        </tr>
                                        <tr>
                                            <td>Afternoon<br />
                                                From School</td>
                                            <td>3:45 pm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p class="fw-bold">
                                Please be at the pick up point 10 minutes before the estimated departure time. For
                                afternoon
                                arrivals, please note that there is a no waiting policy for the shuttle buses.
                            </p>
                            <p class="fw-bold">
                                Parents who wish to ensure that their child will be accompanied when they alight from
                                the
                                bus must ensure that they are present and waiting before the bus arrives. The Shuttle
                                buses
                                will not wait for parents to pick up their children.
                            </p>
                            <div class="form-group">
                                <label>Medical conditions</label>
                                <textarea class="form-control"
                                    placeholder="Please include any medical condition that we need to take note of">

                            </textarea>
                            </div>
                        </div>
                        <div class="col-4 text-center">
                            <div class="bg-white bg-addimage">
                                <img src="" />
                            </div>
                            <input type="range" v-on="changeImage" />
                            <button type="button" class="btn btn-info mt-3" value="imagechild">Update Image</button>
                        </div>

                    </div>
                    <hr class="mx-4" />
                    <div class="row mb-3">
                        <button type="button" @click="AddChildren"
                            class="btn btn-dark btn-feature-main mx-auto d-block">Add
                            more
                            children</button>
                    </div>
                </div>

                <div style="max-width: 1024px;" class="mx-auto py-4">
                    <p>
                        Please read the <span style="color:#006d29"> Terms and Conditions & Bus Regulations</span>
                        carefully. This forms an integral part of
                        our agreement in respect to bus transportation for your child. By submitting this form, you
                        confirm that you agree to the terms and conditions contained herein and undertake to take
                        responsibility for your child's adherence to the same.
                    </p>
                    <p>
                        Applications must be received within the deadlines stipulated. <span style="color:#006d29">Your
                            application will take
                            between 2 to 4 weeks to be processed.</span> During high traffic periods, your application
                        may
                        take a
                        little longer to be processed. You will be informed of the results of your application by email.
                        Bus information will be sent to the email indicated by you to be the first point of contact.
                        Please note that a seat for your child can only be confirmed when full payments has been
                        received.
                    </p>
                    <p>
                        All students are required to purchase a beacon. The beacon is a security feature that allows us
                        to ascertain your child's location when he is a rider on the bus on the bus. The yearly
                        subscription of $25 (before GST) will be charged to your child's transport fares. Replacement
                        beacons are charged at $25 (before GST) a piece. These beacons are <span
                            style="color:#006d29">non-transferable.</span> Students on
                        Shuttle buses do not need a beacon for travel.
                    </p>
                    <p>
                        Bus Details will be provided to you via email. Please ensure that the email addresses provided
                        to us are valid and are readily accessible by you.
                    </p>
                    <p>
                        When using the School Bus Transport Service, the use of Child Safety Restraint (CSR)- (Ride
                        Safer Vest) for all students up to Year 1 is strongly encouraged. Students who are less than
                        1.35 meters in height are recommended to use the approved Ride Safer Vest or Mifold booster seat
                        (as per School Safety standard).
                    </p>
                    <p>
                        School approved CSR products are available and can be purchased directly from Taxi Baby
                        :https://sg.taxibaby.com/
                    </p>
                    <p>
                        You can contact us at chatsworth@tongtar.com or approach the Transport Coordinator in school.
                        Alternatively, you can also ring us at 6261 5537 during office hours (8.30am to 4.00pm) and ask
                        to speak with the School Transport Team.
                    </p>

                    <label class="w-100 d-flex justify-content-center">
                        <input type="checkbox" class="form-check" />
                        I agree to the <span style="color:#006d29">terms of service</span>
                    </label>
                    <label class="w-100 d-flex justify-content-center">
                        <input type="checkbox" class="form-check" />
                        I acknowledge that I have read and understood the <span style="color:#006d29">Data Protection
                            Notice</span>, and consent to the
                        collection, use and disclosure of my personal data by Tong Tar Transport Service Pte Ltd for the
                        purposes set out in the Notice.
                    </label>

                    <button type="submit" class="btn btn-dark d-block mx-auto btn-feature-main">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>

import { v4 } from 'uuid';
export default {
    data() {
        return {
            person_v1: 'Father',
            paymentCheck: 'Father',
            arrchildall: [{
                id_child: v4(),
                family_name: "",
                given_name: "",
                date_of_birth: null,
                school_code: "",
                grade: "",
                gender: "male",
                type_of_service: "first_day_of_semester",
                date_start: null,
                route_service: "",
                descriptions: "",
                image_result: null,
                image: null,
            }],
            imagechild: null
        }
    },
  
     methods: {
        AddChildren: function() {
             this.arrchildall.push(this.arrchildall)
         },
         RemoveChildren: function (index) {
             this.arrchildall.splice(index, 1);
         },
        SendData: function () {
            
        }
     },
      
    
}
</script>

<style>



    .btn-feature-main{
        width: 200px;
    }

    .hidden{
        display: none;
    }

    .routes label{
        display: block !important;
    }
    .routes label input {
        margin-right: 5px;
    }
    section {
        display: flex;
        justify-content: center;
    }
    .card{
        margin-top: 50px;
        border:1px solid #006d29;
    }
    .card-header{
        background: #006d29;
        overflow: hidden;
    }
    .card-header label{
        color: white;
        font-size: 20px;
        margin-bottom: 0;
    }
    .mark{
        color:red;
        background: none;
    }
    .fw-bold{
        font-weight: bold;
        
    }
    .text-radio{
        display: inline-block;
            width: 120px;
            margin-bottom: 5px;
            font-weight: 700;
    }
   
   .card-header i{
           background: url('../../public/img/download.png') no-repeat left;
           background-size: cover;
           background-position: center;
    display: inline-block;
    width: 54px;
    height: 55px;
    position: absolute;
    top: -5px;
    right: 6px;
    }
    input[type="range"]{
        width: 90%;
    }
    .bg-addimage{
        height: 300px;

        width: 300px;
        margin: auto;
        border: 70px solid rgb(0 0 0 / 50%);
        margin-bottom: 20px;

    }
    input[type="image"]{
        height: 450px;
    }
</style>