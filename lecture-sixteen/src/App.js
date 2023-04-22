import logo from './logo.svg';
import './App.css';
import {BookSection} from './BookSection';

function App() {

  const HandleOnClickInfo = (bookName, bookCharacters) => {
    console.log(bookName, bookCharacters);
  }
  return (
    <div className="App">
      <BookSection imgLink='https://www.lit.ge//shop/uploads/shop_product_image_325291.jpg' bookName='სწრაფი, ღამისიერი' bookDescription='კიბერპანკ რომანი „სწრაფი, ღამისიერი“ ექსპერიმენტული პროზის ნიმუშია, რომელშიც  მოვლენები ვითარდება მომავლის თბილისსა და ფაზისში.' bookCharacters={['კიარა','ლიბერ ალი','რენე']} onPrintInfoClick={HandleOnClickInfo}/>
      <BookSection imgLink='https://saba.com.ge/content/images/book/o/b1d1387695054650b76716e7d7507156.png' bookName='საღეჭი განთიადები: უშაქროდ' bookDescription='საღეჭი განთიადები უშაქროდ" ზურა ჯიშკარიანის სადებიუტო რომანია, რომელიც კიბერპანკის ჟანრს განეკუთვნება და არეული ალგორითმების გამო, ციფრულ სამყაროში შემდგარი მეორედ მოსვლის შესახებ მოგვითხრობს. სანამ სასულიერო პირები რეალობას ჰაკავენ, რომ იქნებ რამენაირად შეაჩერონ პროცესი, ,,მოგზაურთა" ჯგუფი მობილიზებას იწყებს, რათა სიმულაციაში გამომწყვდეული მესია დაიხსნას...' bookCharacters={['ჩუჟოი','კინკონგა','დიჯეი ქურუმი']} onPrintInfoClick={HandleOnClickInfo}/>
    </div>
  );
}

export default App;
