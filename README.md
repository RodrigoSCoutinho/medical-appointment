## Medical appointment scheduling

<p>
Creating an API to manage patients and doctors while adhering to all necessary business rules, along with the implementation of automated tests.
</p>


## Adopted Practices

- SOLID
- Usage of DTOs for the API
- Dependency Injection
- Auditing on entity creation and update

## Technologies

- [Expresst]()
- [Typescript]()
- [Prisma]()
- [Vitest]()
- [Swagger]()
- [Bycript]()
- [JWT]()


### **Functionalities**

---

### **User registration**

- **[ x ]** It must be possible for a user to register.
- **[ x ]** The user does not need to be authenticated in the system to register.
- **[ x ]** It should not be possible to register a user without username and password.
- **[ x ]** It should not be possible to register an existing username.
- **[ x ]** It should not be possible for the user to register administrator permissions.


### **Specialty Registration**

- **[  ]** It must be possible for a user to register a specialty.
- **[ x ]** The user needs to be authenticated in the application.
- **[ x ]** It should not be possible to register an existing specialty, that is, with the same name.
- **[ x ]** The user must have administrator permissions.
- **[ x ]** It should not be possible to register a specialty with an empty name.

### **Doctor's Registration**

- **[ x ]** It must be possible register a doctor.
- **[ x ]** The doctor must have a CRM with 6 digits.
- **[ x ]** The doctor must be linked to a user.
- **[ x ]** The doctor must have one and only one specialty.
- **[ x ]** It should not be possible to register a doctor without a CRM.
- **[ x ]** It should not be possible to register the same CRM more than once.

### **Physician Information Registration**

- **[ x ]** It must be possible to register the information of a doctor.
- **[ x ]** The doctor must be registered.
- **[ x ]** The doctor must be authenticated in the application. (ROUTES)
- **[ x ]** It should not be possible to have more than one record of information per physician.
- **[ x ]** The end time must not be less than the start time.
- **[ x ]** The query duration cannot be less than or equal to zero.