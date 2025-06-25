import '@ant-design/v5-patch-for-react-19';
import React, { useState } from 'react'
import { Form, Input, Button, Card, Typography } from 'antd'
import styles from './App.module.css'

const { Title } = Typography

function App() {
  const [formData, setFormData] = useState({ name: '', description: '' })
  const [submittedData, setSubmittedData] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    setSubmittedData(formData)
    setFormData('')
  }
  return (
    <div className={styles.app}>
      <Title level={2} style={{color: 'teal'}}>Form with Ant Design</Title>

      <Form layout="vertical">
        <Form.Item label="Name">
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name..."
          />
        </Form.Item>

        <Form.Item label="Description">
          <Input
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter your description..."
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" style={{background: 'teal'}} onClick={handleSubmit}>
            Send
          </Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <Card style={{ marginTop: '50px', background: 'rgba(181, 222, 222, 0.3)', color: 'teal' }}>
          <Title level={3} style={{color: 'teal'}} >Sent data:</Title>

          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>

          <p>
            <strong>Description:</strong> {submittedData.description}
          </p>
        </Card>
      )}
    </div>
  )
}

export default App
