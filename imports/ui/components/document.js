import React from 'react';
import InlineCss from 'react-inline-css';
import { Button, ListGroupItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

export const Document = ({ document }) => (
  <InlineCss stylesheet={`
      .Document {
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      }

      @media print {
        .Document {
          display: block;
          border: 1px solid red;
          padding: 20px;
        }

        .btn { display: none; }

        hr { display: none; }

        h3 {
          font-size: 28px;
          margin-top: 0px;
          margin-bottom: 0px;
        }

        p {
          margin-top: 10px;
          margin-bottom: 0px;
          font-size: 18px;
        }
      }
  `}>
    <ListGroupItem className="Document">
      <Button data-id={ document._id } bsStyle="success" onClick={ downloadPDF }>Download</Button>
      <hr />
      <h3>{ document.title }</h3>
      <p>{ document.body }</p>
    </ListGroupItem>
  </InlineCss>
);

Document.propTypes = {
  document: React.PropTypes.object.isRequired,
};



/*import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { updateDocument, removeDocument } from '../../api/documents/methods.js';

const handleUpdateDocument = (documentId, event) => {
  const title = event.target.value.trim();
  if (title !== '' && event.keyCode === 13) {
    updateDocument.call({
      _id: documentId,
      update: { title },
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Document updated!', 'success');
      }
    });
  }
};

const handleRemoveDocument = (documentId, event) => {
  event.preventDefault();
  // this should be replaced with a styled solution so for now we will
  // disable the eslint `no-alert`
  // eslint-disable-next-line no-alert
  if (confirm('Are you sure? This is permanent.')) {
    removeDocument.call({
      _id: documentId,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Document removed!', 'success');
      }
    });
  }
};

export const Document = ({ document }) => (
  <ListGroupItem key={ document._id }>
    <Row>
      <Col xs={ 8 } sm={ 10 }>
        <FormControl
          type="text"
          defaultValue={ document.title }
          onKeyUp={ handleUpdateDocument.bind(this, document._id) }
        />
      </Col>
      <Col xs={ 4 } sm={ 2 }>
        <Button
          bsStyle="danger"
          className="btn-block"
          onClick={ handleRemoveDocument.bind(this, document._id) }>
          Remove
        </Button>
      </Col>
    </Row>
  </ListGroupItem>
);*/
