import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

interface CodeGeneratorProps {}

interface FileInput {
  folder: string;
  files: string[];
  subfolders: FileInput[];
}

const CodeGenerator: React.FC<CodeGeneratorProps> = () => {
  const [folderInputs, setFolderInputs] = useState<FileInput[]>([]);

  const handleAddFolder = (parentIndex?: number) => {
    const updatedFolderInputs = [...folderInputs];

    if (parentIndex !== undefined) {
      // Nếu parentIndex được cung cấp, thêm folder con vào folder cha
      updatedFolderInputs[parentIndex].subfolders = [
        ...updatedFolderInputs[parentIndex].subfolders,
        { folder: "", files: [""], subfolders: [] },
      ];
    } else {
      // Nếu không có parentIndex, thêm folder mới ở mức đỉnh
      updatedFolderInputs.push({ folder: "", files: [""], subfolders: [] });
    }

    setFolderInputs(updatedFolderInputs);
  };

  const handleFolderChange = (index: number, value: string) => {
    const updatedFolderInputs = [...folderInputs];
    updatedFolderInputs[index].folder = value;
    setFolderInputs(updatedFolderInputs);
  };

  const handleAddFile = (folderIndex: number) => {
    const updatedFolderInputs = [...folderInputs];
    updatedFolderInputs[folderIndex].files = [
      ...updatedFolderInputs[folderIndex].files,
      "",
    ];
    setFolderInputs(updatedFolderInputs);
  };

  const handleFileChange = (
    folderIndex: number,
    fileIndex: number,
    value: string
  ) => {
    const updatedFolderInputs = [...folderInputs];
    updatedFolderInputs[folderIndex].files[fileIndex] = value;
    setFolderInputs(updatedFolderInputs);
  };

  const handleSubmit = () => {
    // Thực hiện xử lý submit ở đây, có thể gửi dữ liệu lên server hoặc thực hiện các tác vụ khác
    console.log("Folder Inputs:", folderInputs);
  };

  return (
    <Container>
      <Form>
        {folderInputs.map((folderInput, folderIndex) => (
          <div key={folderIndex}>
            <Form.Group controlId={`folderName-${folderIndex}`}>
              <Form.Label>Folder Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter folder name ${folderIndex + 1}`}
                value={folderInput.folder}
                onChange={(e) =>
                  handleFolderChange(folderIndex, e.target.value)
                }
              />
            </Form.Group>

            <Form.Group controlId={`files-${folderIndex}`}>
              <Form.Label>Files</Form.Label>
              {folderInput.files.map((file, fileIndex) => (
                <Row key={fileIndex}>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder={`Enter file ${fileIndex + 1} for folder ${
                        folderIndex + 1
                      }`}
                      value={file}
                      onChange={(e) =>
                        handleFileChange(folderIndex, fileIndex, e.target.value)
                      }
                    />
                  </Col>
                  <Col>
                    {fileIndex === folderInput.files.length - 1 && (
                      <Button
                        variant="primary"
                        onClick={() => handleAddFile(folderIndex)}
                      >
                        Add File
                      </Button>
                    )}
                  </Col>
                </Row>
              ))}
            </Form.Group>

            <Button
              variant="primary"
              onClick={() => handleAddFolder(folderIndex)}
            >
              Add Subfolder
            </Button>
          </div>
        ))}

        <Button variant="primary" onClick={() => handleAddFolder()}>
          Add Folder
        </Button>

        <Button variant="success" onClick={handleSubmit}>
          Generate Code
        </Button>
      </Form>
    </Container>
  );
};

export default CodeGenerator;
