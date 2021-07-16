import React from "react";

export const GenerateData = (setter: Function): void => {
  const Data: Array<Person> = [];
  fetch(`https://randomuser.me/api/?results=10`).then((response) =>
    response.json().then((data) => {
      data.results.map((i: any) =>
        Data.push({
          Age: i.dob.age,
          City: i.location.city,
          Email: i.email,
          ImageUrl: React.createElement("img", { src: i.picture.thumbnail }),
          Name: `${i.name.title}. ${i.name.first} ${i.name.last}`,
        })
      );
      setter(Data);
    })
  );
};

export interface Person {
  Age: number;
  City: string;
  Email: string;
  ImageUrl: React.ReactNode;
  Name: string;
}
