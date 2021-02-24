import React, { Component } from 'react'
import styled from 'styled-components';

class TagsInput extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tags: []    // settings an array to contain the tags 
        }
        this.inputRef = React.createRef();
    }

    //For removing the tag 
    removeTag = i => {
        const tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({
            tags : tags
        })
    }

    //For Adding the tags
    addTag = e => {
        const tags = this.state.tags;
        const value = e.target.value;
        if(e.key === "Enter" && value){
            //if duplicate, send an alert
            if(tags.find(tag => tag.toLowerCase() === value.toLowerCase())){
                return alert("Already have this Tag!");
            }
            tags.push(value); // add the tag to the array
            this.setState({
                tags
            })
            this.inputRef.current.value = null; // setting the input space to null after submitting a tag 
        } else if(e.key === "Backspace" && !value){
            this.removeTag(tags.length - 1);
        }
        
    }

    render() {
        const {tags} = this.state;
        return (
            <>
                <TagContainer>
                    <TagList>
                        { tags.map((tag, i) => {
                            return (
                                <InputList key={i}> {tag} <TagButton onClick={() => this.removeTag(i)}>+</TagButton> </InputList>
                            )
                            })
                        }
                        <InputList className="input-tag">
                            
                                <InputTag onKeyDown={this.addTag} type="text" size="4" ref={this.inputRef} placeholder="Enter Tag"/>
                            
                        </InputList>   
                    </TagList>       
                </TagContainer>
            </>
        )
    }
};


export default TagsInput;

const TagContainer = styled.div`
    background: #fff;
    border: 1px solid #d6d6d6;
    border-radius: 2px;
    width: 95%;
`

const InputTag = styled.input`
    width: 50%;
    outline: none;
    min-width: 70px;

`

const TagList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    width: 100%;
`

const InputList = styled.li`
    margin: 5px;
    padding: 5px;
    align-items: center;
    border-radius: 2px;
    background: #778ca3;
    color: #fff;
    list-style: none;
`

const TagButton = styled.button`
    margin-left: 8px;
    padding: 5px;
    align-items: center;
    border: none;
    background: #333333;
    color: #fff;
    cursor: pointer;
    height: 15px;
    width: 15px;
    font-size: 12px;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    transform: rotate(45deg);
`
