# Aplicatia "My dogs" cu React

Acest tutorial va oferi o introducere privind lucrul cu API-uri REST și React, acoperind conceptele și tehnicile cheie necesare pentru construirea aplicațiilor pentru a crea, citi, modifica și șterge (CREATE, READ, UPDATE și DELETE) date de pe un server. Mai exact, vom gestiona o listă de câini de pe un server. 🐶🐕🐶🐕

## Cuprins
- [Instalare Nodejs](#instalare-nodejs)
- [Pornirea server-ului de backend](#pornirea-server-ului-de-backend)
- [Crearea aplicatiei](#crearea-aplicatiei)
- [Eliminarea codului inutil](#eliminarea-codului-inutil)
- [Aducerea datelor de la server](#aducerea-datelor-de-la-server)
- [Afisarea listei de catei](#afisarea-listei-de-catei)
- [Stergerea unui element din lista de catei](#stergerea-unui-element-din-lista-de-catei)
- [Adaugarea si editarea unui element din lista de catei](#adaugarea-si-editarea-unui-element-din-lista-de-catei)
- [Adaugare mesaj de incarcare](#adaugare-mesaj-de-incarcare)

# Instalare Nodejs

> Săriți acestă sectiune dacă aveți Nodejs instalat pe calculator.

Pentru a instala Node.js pe Windows, puteți descărca fisierul de instalare de pe [site-ul Node.js](https://nodejs.org/en/download/) și urmați instrucțiunile pentru a instala ultima versiune de Node.js pe sistemul dvs.

Pentru a instala Node.js pe Linux, puteți utiliza un manager de pachete precum apt-get sau yum. De exemplu, pentru a instala Node.js pe Ubuntu folosind apt-get, puteți rula următoarele comenzi:

```bash
sudo apt-get update
sudo apt-get install nodejs
```

Pentru a instala Node.js pe MacOS, puteți utiliza managerul de pachete Homebrew. În primul rând, va trebui să instalați Homebrew executând următoarea comandă:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

După ce Homebrew este instalat, puteți folosi pentru a instala Node.js executând următoarea comandă:

```bash
brew install node
```

După ce Node.js este instalat, puteți verifica instalarea executând comanda node -v, care ar trebui să afișeze versiunea instalată de Node.js. De asemenea, puteți utiliza comanda npm pentru a gestiona pachetele și dependențele pentru proiectele dumneavoastră Node.js.

## Pornirea server-ului de backend

Instalati [JSON Server](https://github.com/typicode/json-server) folosind comanda de mai jos:

```bash
npm install -g json-server
```

Creati un fisier `db.json` avand continutul de mai jos:

```json
{
  "dogs": [
    {
      "id": 1,
      "name": "AFFENPINSCHER",
      "img": "https://images.dog.ceo/breeds/affenpinscher/n02110627_8099.jpg"
    },
    {
      "id": 2,
      "name": "AKITA",
      "img": "https://images.dog.ceo//breeds//akita//An_Akita_Inu_resting.jpg"
    },
    {
      "id": 3,
      "name": "CHIHUAHUA",
      "img": "https://images.dog.ceo/breeds/chihuahua/n02085620_7613.jpg"
    },
    {
      "id": 4,
      "name": "LHASA",
      "img": "https://images.dog.ceo/breeds/lhasa/n02098413_7358.jpg"
    },
    {
      "id": 5,
      "name": "HOUND",
      "img": "https://images.dog.ceo/breeds/hound-afghan/n02088094_2626.jpg"
    }
  ]
}
```

Porniti `JSON Server` folosind comanda de mai jos:

```bash
json-server --watch db.json -p 4000
```

Accesand link-ul [http://localhost:4000/dogs/1](http://localhost:4000/dogs/1), veti vedea:

```json
{ "id": 1, "title": "json-server", "author": "typicode" }
```

## Crearea aplicatiei

Creati aplicatia folosind generatorul de proiecte [Create react app](https://facebook.github.io/create-react-app/).

```sh
npx create-react-app my-dogs
cd my-dogs
npm start
```

Accesand link-ul [http://localhost:3000](http://localhost:3000), veti putea vedea noua voastra aplicatie React.

## Eliminarea codului inutil

Sa inlaturam din componenta nou creata `App.js` codul inutil:

```js
import './App.css';

function App() {
  return (
    <main>
    </main>
  );
}

export default App;
```

## Aducerea datelor de la server

In componenta avem nevoie de o variabila (state) care sa stocheze lista de catei, iar pentru asta folosim `useState([])`:

```js
const [dogs, setDogs] = useState([]);
```

Aducem lista de catei cu ajutorul unui request de tip `GET`:

```js
  const fetchDogs = async () => {
    try {
      const response = await fetch('http://localhost:4000/dogs');
      const data = await response.json();
      setDogs(data);
    } catch (error) {
      console.error('Error fetching dogs:', error);
    }
  };
```

Apelam functia creata anterior in momentul in care se initializeaza componenta, folosind `useEffect`:

```js
  useEffect(() => {
    fetchDogs();
  }, []);
```

## Afisarea listei de catei

Folosim o lista neordonata pentru a afisa cateii:

```js
  return (
    <main>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>
            {dog.name} - <img src={dog.img} alt={dog.name} />
            <button type='button'>Edit</button>
            <button type='button'>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
```

Pentru fiecare catel afisam numele, imaginea si butoanele de actiuni: *Editeaza* si *Sterge*.

## Stergerea unui element din lista de catei

Stergem un element din lista de catei cu ajutorul unui request de tip `DELETE`:

```js
   const handleDeleteDog = async (dogId) => {
    try {
      await fetch(`http://localhost:4000/dogs/${dogId}`, {
        method: 'DELETE',
      });
      fetchDogs();
    } catch (error) {
      console.error('Error deleting dog:', error);
    }
  };
```

## Adaugarea si editarea unui element din lista de catei

Pentru a modifica lista de catei avem nevoie de noi `state`-uri, mai exact de datele din formularul de adaugare/editare si de id-ul catelului atunci cand vrem sa il editam:

```js
const [formData, setFormData] = useState({ name: '', img: '' });
const [editingDogId, setEditingDogId] = useState(null);
```

HTML-ul formularului arata ca mai jos si putem sa il punem deasupra listei noastre:

```js
<header>
  <h2>{editingDogId ? 'Edit Dog' : 'Add Dog'}</h2>
  <form onSubmit={editingDogId ? handleEditDog : handleAddDog}>
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={formData.name}
      onChange={handleInputChange}
    />
    <input
      type="text"
      name="img"
      placeholder="Image URL"
      value={formData.img}
      onChange={handleInputChange}
    />
    {editingDogId ? (
      <div>
        <button type="submit">Save</button>
       <button type='button' onClick={handleCancelEdit}>Cancel</button>button>
      </div>
    ) : (
      <button type="submit">Add</button>
    )}
  </form>
</header>
```

Modificam `state`-ul cu numele si URL-ul imaginii gasite in formular:

```js
 const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
```

Apoi, adaugam functiile care ne ajuta la editarea catelului:

```js
const handleEditButtonClick = (dog) => {
  setFormData({ name: dog.name, img: dog.img });
  setEditingDogId(dog.id);
};
```
`handleEditButtonClick` face update la formular si totodata seteaza id-ul catelului editat.

```js
const handleCancelEdit = () => {
  setFormData({ name: '', img: '' });
  setEditingDogId(null);
};
```
`handleCancelEdit` reseteaza formularul si editingDogId


Urmatorul pas este sa adaugam sau sa modificam un element in/din lista de catei cu ajutorul request-urilor de tip `POST` si `PUT`:

```js
const handleAddDog = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:4000/dogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const newDog = await response.json();
    setDogs([...dogs, newDog]);
    setFormData({ name: '', img: '' });
  } catch (error) {
    console.error('Error adding dog:', error);
  }
};
```

```js
const handleEditDog = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`http://localhost:4000/dogs/${editingDogId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const updatedDog = await response.json();
    setDogs(dogs.map((dog) => (dog.id === editingDogId ? updatedDog : dog)));
    setFormData({ name: '', img: '' });
    setEditingDogId(null);
  } catch (error) {
    console.error('Error editing dog:', error);
  }
};
```
Si nu in ultimul rand, adaugam evenimentul de click pe butonul de edit:

```js
<button type='button' onClick={() => handleEditButtonClick(dog)}>Edit</button>
```

## Adaugare mesaj de incarcare

Prin adaugarea unui mesaj de incarcare (Loading dogs...), de fiecare data cand solicitam lista de caini de la server, putem imbunatati experienta de utilizare:

```js
const [loading, setLoading] = useState(true);
...
const fetchDogs = async () => {
  try {
    setLoading(true);
    const response = await fetch('http://localhost:4000/dogs');
    const data = await response.json();
    setDogs(data);
  } catch (error) {
    console.error('Error fetching dogs:', error);
  } finally {
    setLoading(false);
  }
};
```

```js
{loading ? (
        <p>Loading dogs...</p>
) : (
  <ul>
   {dogs.map((dog) => (
      <li key={dog.id}>
        {dog.name} - <img src={dog.img} alt={dog.name} />
        <button type='button' onClick={() => handleEditButtonClick(dog)}>Edit</button>
        <button onClick={() => handleDeleteDog(dog.id)} type='button'>Delete</button>
      </li>
    ))}
  </ul>
)}
```

