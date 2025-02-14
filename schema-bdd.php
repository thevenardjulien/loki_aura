//// meals
// id PK int unique
// name string
// address text
// price int
// description string
// status enum ( en attente, à venir, terminé, annulé )
// thumbnail string
// owner foreign key user_id
// max_capacity int
// table_quantity int nullable
// seats_per_table int nullable

//// table pivot meal_user
// user_id foreignKey user_id
// meal foreignKey meal_id
// table_number int nullable
// payment_status enum ( default:en attente, payé, annulé )

//// users
// id PK int unique
// firstname string
// lastname string
// title enum ( M, Mme )
// email string
// phone string
// phone_pro string
// active enum (en attente, actif, abandon, mutation, exclusion)
// renew date
// profile_photo_path string
// description string
// position_id foreign key position_id
// company_id foreign key company_id

//// companies
id K int unique
name string

//// positions
id PK int unique
name string

//// Addresses
// id PK int unique
// user_id foreigKey user_id
// postal_code string
// city string
// adress text