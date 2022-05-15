# CLI
This is a sample project for CLI which is implemented focusing on extensibility; that means for any command community wants to extend they can simply introduce their own connector and plug it in.

# Plugins:
So far I have implemented the following npm scopped plugins:
- **NPM:** [@amir-cli/cli-get](https://www.npmjs.com/package/@amir-cli/cli-get), **GITHUB:** [cli-get](https://github.com/Amir-61/cli-get)
- **NPM:** [@amir-cli/cli-set](https://www.npmjs.com/package/@amir-cli/cli-set), **GITHUB:** [cli-set](https://github.com/Amir-61/cli-set)
- **NPM:** [@amir-cli/cli-init](https://www.npmjs.com/package/@amir-cli/cli-init), **GITHUB:** [cli-init](https://github.com/Amir-61/cli-init)


# Usages of different plugins:

- ## GET module 
    *(GIT: https://github.com/Amir-61/cli-get, NPM: https://www.npmjs.com/package/@amir-cli/cli-get):*
    - ### `GET *` :
        will print out a list of all target object members and their current values.
    - ### `GET propertyName`:
        will print out the current value of the target object’s member named “propertyname".
    
- ## SET module 
    *(GIT: https://github.com/Amir-61/cli-set, NPM: https://www.npmjs.com/package/@amir-cli/cli-set):*
    - ### `SET propertyname=newValue` :
        will change the target object’s member named “propertyname” to have a value equal to “newValue”.  If the input value is incompatible (i.e. an int being set to a string), print out an appropriate error message.
- ## INIT module 
    *(GIT: https://github.com/Amir-61/cli-init, NPM: https://www.npmjs.com/package/@amir-cli/cli-init):*
    - ### `INIT --object={myStringifiedObjectHere}` :
        will reset the datastore with provided object. For example `INIT --object="{'name':'foo'}"` will set/initialize the datasource with {'name':'foo'}
    - ### `INIT --file=sourceFilePath` :
        will reset the datastore the JSON file you provide. For example: `INIT --file="test.json"`

# Unit tests:
- Each connector comes with it's own unit tests written in [mocha](https://mochajs.org/), you can run unit tests for each module sperataly using `npm test` command
# Contribution form the community:
Please feel free to send pull requests to include the plugins you implement as connectors so the community can take advantege of them as well.