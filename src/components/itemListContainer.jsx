import React from 'react'

let products = [];

products.push({item:"Curso", precio:"2,000"});

const itemListContainer = (item, precio) => {
  return (
      <>
      <Row>
  <Col
    m={6}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="#">This is a Link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Here is the standard card with an image thumbnail.
    </Card>
  </Col>
</Row>
      </>

  )
}


export {itemListContainer}