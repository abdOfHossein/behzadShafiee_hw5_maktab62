let personData = [
    {
        uid: 1,
        firstName: "Ali",
        lastName: "Mahdavi"
    },
    {
        uid: 2,
        firstName: "Reza",
        lastName: "Shahmardan"
    },
    {
        uid: 3,
        firstName: "Hassan",
        lastName: "Qolami"
    },
    {
        uid: 4,
        firstName: "Morteza",
        lastName: "Hamedani"
    },
    {
        uid: 5,
        firstName: "Sina",
        lastName: "Hejazi"
    },
    {
        uid: 6,
        firstName: "Hadi",
        lastName: "Sadri"
    }
];


let additionalPersonData = [
    {
        uid: 3,
        position: "UI Designer",
        city: "Biarjmand"
    },
    {
        uid: 1,
        position: "Back-End Develope",
        city: "Taleqan"
    },
    {
        uid: 2,
        position: "Front-End Developer",
        city: "Behbahan"
    },
    {
        uid: 4,
        position: "Devops",
        city: "Shiraz"
    },
    {
        uid: 6,
        position: "Server Admin",
        city: "Tehran"
    },
    {
        uid: 5,
        position: "Product Manager",
        city: "Hamedan"
    }
];


let result = [];

for (key1 of personData) {
    // let obj=Object.assign({})
    let obj = new Object();
    for (key2 of additionalPersonData) {
        if (key1.uid === key2.uid) {
            obj.uid = key1.uid;
            obj.fisrtName = key1.firstName;
            obj.lastName = key1.lastName;
            obj.position = key2.position;
            obj.city = key2.city;
            result.push(obj);
        }

    }

}
console.log(result);


//########################################################################
//Read() OK
// function Read(array1, array2) {
//     let result = [];
//     for (key1 of array1) {
//         let obj = new Object();
//         for (key2 of array2) {
//             if (key1.uid === key2.uid) {
//                 obj.uid = key1.uid;
//                 obj.fisrtName = key1.firstName;
//                 obj.lastName = key1.lastName;
//                 obj.position = key2.position;
//                 obj.city = key2.city;
//                 result.push(obj);
//             }

//         }

//     }
//     console.log(result);
//     return;
// }

// Read(personData,additionalPersonData);


//########################################################################


//OK
//Craet()
// function Creat(obj) {
//     if(obj.uid<=6){
//         alert('This uid exsited');
//     }
//     else{
//         result.push(obj);
//     }
//     console.log(result);
// }

// Creat({uid: 7, fisrtName: 'Haadi', lastName: 'Sadwri', position: 'Seraver Admin', city: 'Tdehran'})

//########################################################################


//noK
// function Update(obj) {
//     if (obj.uid <= 6) {
//         for (let key of result) {
//             if(key.uid===obj.uid){
//                 result.splice(result[key],1,obj);
//             }
//         }
//         console.log(result);
//     }
//     else{
//         alert(`This uid isn't exist`)
//     }
//    return;
// }

// Update({uid: 6, fisrtName: 'Haadi', lastName: 'Sadwri', position: 'Seraver Admin', city: 'Tdehran'})


//###########################################################################

//Delete()
// function Delete(obj) {
//     if (obj.uid <= 6) {
//         for (let key of result) {
//             if(key.uid===obj.uid){
//                 result.splice(result[key],1,null);
//             }
//         }
//         console.log(result);
//     }
//     else{
//         alert(`This uid isn't exist`)
//     }
//    return;
// }