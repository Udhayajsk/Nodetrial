

const app = express();
const PORT = 4000; //http://localhost:4000/

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome you all to my shop" });
});

app.get("/get_data", (req, res) => {
    res.status(200).json({ message: "data",data:{welcome:"hello"} });
  });
app.listen(PORT, () => {
  console.log(`Server is running on port  ${PORT}`);
});
