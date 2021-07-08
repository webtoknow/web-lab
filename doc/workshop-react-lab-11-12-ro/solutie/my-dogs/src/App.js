import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  addButton: {
    margin: '10px'
  },
  editButton: {
    marginRight: '20px'
  },
  img: {
    height: '150px'
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      openModal: false,
      id: null,
      name: '',
      img: '',
    }
  }

  componentDidMount() {
    this.getDogs()
  }

  getDogs() {
    fetch('http://localhost:4000/dogs')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dogs: responseJson,
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  deleteDog(id) {
    const self = this;

     fetch(`http://localhost:4000/dogs/${id}`, {
      method: 'DELETE',
      }).then(function () {
        self.getDogs();
    });
  }

  addDog = () => {
    this.setState({ openModal: true, id: null, name: '', img: '' });
  }

  editDog(dog) {
    this.setState({ openModal: true, id: dog.id, name: dog.name, img: dog.img });
  }

  handleFieldChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  closeModal = () => {
    this.setState({ openModal: false });
  }

  saveDogs = () => {
    const { id, name, img } = this.state
    const url = id ===  null ? 'http://localhost:4000/dogs' : `http://localhost:4000/dogs/${id}`;
    const method = id === null ? 'POST' : 'PUT';
    const postObject = id === null ? { name, img } : { id, name, img }
    const self = this;

    fetch(url, {
      method: method,
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify(postObject)
    }).then(function () {
      self.getDogs();
      self.closeModal();
    });
  }
   closeModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    const { dogs, openModal } = this.state;
    const { classes } = this.props;

    return (
      <Paper>
        <Button color="secondary" variant="contained" className={classes.addButton} onClick={this.addDog}>
            <AddIcon />
          Adauga
        </Button>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Nume</TableCell>
              <TableCell align="center">Imagine</TableCell>
              <TableCell align="right">Actiuni</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dogs.map(dog => {
              return (
                <TableRow key={dog.id}>
                  <TableCell component="th" scope="row">
                    {dog.name}
                  </TableCell>
                  <TableCell align="center">
                    <img src={dog.img} alt={dog.name} className={classes.img} />
                  </TableCell>
                  <TableCell align="right">
                    <Button className={classes.editButton} onClick={() => this.editDog(dog)}>
                      <EditIcon />
                     Editeaza
                  </Button>
                    <Button onClick={() => this.deleteDog(dog.id)}>
                      <DeleteIcon />
                     Sterge
                  </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Dialog
        open={openModal}
        onClose={this.closeModal}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Dog name"
            type="text"
            value={this.state.name}
            onChange={this.handleFieldChange('name')}
            fullWidth
          />
          <TextField
            margin="dense"
            id="img"
            label="Image Url"
            type="img"
            value={this.state.img}
            onChange={this.handleFieldChange('img')}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.closeModal} color="primary">
            Anulare
          </Button>
          <Button onClick={this.saveDogs} color="primary">
            Salvare
          </Button>
        </DialogActions>
      </Dialog>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);